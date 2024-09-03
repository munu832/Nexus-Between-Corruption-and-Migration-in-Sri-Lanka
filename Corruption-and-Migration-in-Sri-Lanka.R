#Interactive Map


if (!require(devtools)) install.packages("devtools")
devtools::install_github("thiyangt/ceylon")

library(ceylon)
library(ggplot2)
library(dplyr)
library(viridis)
library(scales)
library(sf)
library(leaflet)


data(district)

registration_data <- data.frame(
  District = c("Amparai", "Anuradhapura", "Badulla", "Batticaloa", "Colombo", "Galle", 
               "Gampaha", "Hambantota", "Jaffna", "Kalutara", "Kandy", "Kegalle", 
               "Kilinochchi", "Kurunegala", "Mannar", "Matale", "Matara", "Monaragala", 
               "Mullative", "NuwaraEliya", "Polonnaruwa", "Puttalum", "Rathnapura", 
               "Trincomalee", "Vavuniya"),
  Registration = c(20374, 14487, 7765, 22086, 34704, 15330, 30871, 5837, 4649, 17233, 
                   30672, 10740, 437, 26135, 1151, 8601, 6963, 2446, 376, 5463, 7535, 
                   15779, 9362, 9965, 2095)
)

registration_data$District <- toupper(registration_data$District)
registration_data$District[registration_data$District == "AMPARAI"] <- "AMPARA"
registration_data$District[registration_data$District == "MULLATIVE"] <- "MULLAITIVU"
registration_data$District[registration_data$District == "PUTTALUM"] <- "PUTTALAM"
registration_data$District[registration_data$District == "RATHNAPURA"] <- "RATNAPURA"
registration_data$District[registration_data$District == "NUWARAELIYA"] <- "NUWARA ELIYA"

district_cleaned <- district %>%
  filter(Status != "[UNKNOWN]", !is.na(population))


merged_data <- district_cleaned %>%
  left_join(registration_data, by = c("DISTRICT" = "District"))


quantiles <- quantile(merged_data$Registration, probs = c(0.1, 0.9), na.rm = TRUE)


static_plot <- ggplot(data = merged_data) +
  geom_sf(aes(fill = Registration), color = "white", size = 0.2) +
  scale_fill_distiller(palette = "YlOrRd", direction = 1, 
                       name = "Registrations", 
                       labels = scales::comma_format(),
                       na.value = "grey90",
                       guide = guide_colorbar(barwidth = 20, barheight = 1)) +
  geom_sf_text(aes(label = DISTRICT), 
               size = 2.5,
               check_overlap = TRUE,
               color = "black", fontface = "bold") +
  geom_sf_text(aes(label = ifelse(!is.na(Registration) & (Registration > quantiles[2] | Registration < quantiles[1]), 
                                  scales::comma(Registration), "")),
               color = "black", size = 2, vjust = 2,
               check_overlap = TRUE) +
  theme_minimal() +
  labs(title = "Total Registration with SLBFE by Districts - 2022",
       subtitle = "Districts with highest and lowest registrations are labeled",
       caption = "*provisional Source: Information Technology Division-SLBFE\nTotal Registrations: 311,056") +
  theme(plot.title = element_text(hjust = 0.5, size = 16, face = "bold"),
        plot.subtitle = element_text(hjust = 0.5, size = 12),
        legend.position = "bottom",
        legend.title = element_text(size = 10),
        legend.text = element_text(size = 8),
        plot.caption = element_text(hjust = 1, size = 8, face = "italic"),
        axis.text = element_blank(),
        axis.ticks = element_blank(),
        axis.title = element_blank(),
        panel.grid = element_blank()) +
  coord_sf(expand = TRUE)


ggsave("SLBFE_Registration_Map_Static.png", static_plot, width = 12, height = 10, dpi = 300)


merged_data_transformed <- st_transform(merged_data, 4326)

leaflet_map <- leaflet(merged_data_transformed) %>%
  addTiles() %>%
  addPolygons(
    fillColor = ~colorNumeric("YlOrRd", Registration)(Registration),
    weight = 2,
    opacity = 1,
    color = "white",
    dashArray = "3",
    fillOpacity = 0.7,
    highlightOptions = highlightOptions(
      weight = 5,
      color = "#666",
      dashArray = "",
      fillOpacity = 0.7,
      bringToFront = TRUE),
    label = ~paste(DISTRICT, ": ", scales::comma(Registration)),
    labelOptions = labelOptions(
      style = list("font-weight" = "normal", padding = "3px 8px"),
      textsize = "15px",
      direction = "auto")
  ) %>%
  addLegend(pal = colorNumeric("YlOrRd", merged_data_transformed$Registration),
            values = merged_data_transformed$Registration,
            title = "Registrations",
            position = "bottomright")


htmlwidgets::saveWidget(leaflet_map, "SLBFE_Registration_Map_Interactive.html")

print("Both static and interactive maps have been saved.")

#Collapsible Tree

library(collapsibleTree)
library(htmlwidgets)


Corruption_Migration_Cycle <- data.frame(
  Phase = c("Pre-Departure", "Pre-Departure", "Pre-Departure", "Transit", "Transit", "Transit", "Destination", "Destination", "Destination", "Destination", "Post-Arrival", "Post-Arrival", "Return and Reintegration", "Return and Reintegration"),
  Practice = c("Visa Procurement", "Recruitment Agencies", "Pre-Departure Training", "Border Crossings", "Transportation Services", "Transit Accommodation", "Employment Exploitation", "Housing and Accommodation", "Healthcare and Insurance", "Visa Procurement and Documentation", "Residence Permits and Documentation", "Access to Services", "Deportation and Repatriation", "Reintegration Support"),
  Detail = c("", "", "", "", "", "", "", "", "", "", "", "", "", "")
)


p <- collapsibleTree(
  Corruption_Migration_Cycle, 
  c("Phase", "Practice", "Detail")
)

p


saveWidget(p, file = paste0(getwd(), "/HtmlWidget/dendrogram_interactive.html"))
