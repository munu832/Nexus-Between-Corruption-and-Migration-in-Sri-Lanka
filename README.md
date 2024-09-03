# Nexus Between Corruption and Migration in Sri Lanka

This repository contains a project that explores the intricate relationship between corruption and migration patterns in Sri Lanka, focusing on data from the Sri Lanka Bureau of Foreign Employment (SLBFE) for the year 2022. The project includes both key figures and map visualizations created using R.

## Project Overview

This project investigates the connection between corruption and migration in Sri Lanka, utilizing R for data visualization and analysis. The project showcases a variety of visualizations, including static and interactive maps, as well as an interactive collapsible tree that helps explore the data in detail.

### Files in the Repository

- **SLBFE_Registration_Map_Static.png**: A static map showing district-wise SLBFE registrations for 2022.
- **SLBFE_Registration_Map_Interactive.html**: An interactive map allowing users to explore SLBFE registration data by district.
- **Key_Figures.png**: Visual representations of key phases of migration and related corrupt practices.
- **Collapsible_Tree.html**: An interactive collapsible tree visualization that links migration phases with potential corrupt practices.
- **script.R**: The R script used to generate the static and interactive maps, as well as the collapsible tree.
- **README.md**: This file, providing an overview of the project.

## Dependencies

This project depends on several R packages:

- **ceylon**: For creating detailed maps of Sri Lanka's administrative regions.
- **ggplot2**: Used for generating static plots.
- **dplyr**: For data manipulation and wrangling.
- **sf**: For handling spatial data and integrating it with R's data ecosystem.
- **leaflet**: For building interactive maps.
- **viridis**: For applying perceptually uniform color scales to the maps.
- **scales**: For formatting numeric data within plots.
- **collapsibleTree**: For creating interactive collapsible tree visualizations.
- **htmlwidgets**: For saving interactive visualizations like maps and trees as HTML files.

## Installation

To replicate or extend this project, install the necessary R packages. Start by installing the `ceylon` package from GitHub:

```r
if (!require(devtools)) install.packages("devtools")
devtools::install_github("thiyangt/ceylon")

## Then, install the remaining packages from CRAN:
install.packages(c("ggplot2", "dplyr", "sf", "leaflet", "viridis", "scales", "collapsibleTree", "htmlwidgets"))

##Usage
Execute the R script (script.R) to generate the visualizations, including the static map, interactive map, and collapsible tree. The interactive components (maps and tree) are saved as .html files and can be viewed in any web browser.

Generating Maps
Static Map: The static map visualization is generated using ggplot2 and saved as a PNG file.
Interactive Map: The interactive map is built using leaflet and saved as an HTML file for browser viewing.
Creating the Collapsible Tree
Interactive Tree: The collapsible tree that visualizes the relationship between migration phases and corrupt practices is generated using the collapsibleTree package.
References
Package Citation: Talagala, T. S. (2023). ceylon: Creating Maps of Sri Lanka Administrative Regions, Rivers and Streams. Zenodo. https://doi.org/10.5281/zenodo.10432141
License
This project is licensed under the MIT License. See the LICENSE file for more details.

