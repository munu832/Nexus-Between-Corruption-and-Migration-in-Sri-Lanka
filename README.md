# Nexus Between Corruption and Migration in Sri Lanka

## Project Overview

This repository contains a comprehensive analysis of the intricate relationship between corruption and migration patterns in Sri Lanka, focusing on data from the Sri Lanka Bureau of Foreign Employment (SLBFE) for the year 2022 and survey findings. The project utilizes R for data visualization and analysis, showcasing a variety of static and interactive visualizations to explore this complex issue.

### Key Features

- **Data-driven Analysis**: Utilizes official SLBFE registration data for 2022
- **Geospatial Visualization**: Includes both static and interactive maps of Sri Lanka
- **Interactive Exploration**: Features a collapsible tree to examine corruption in different migration phases
- **Reproducible Research**: Provides all necessary code and data for replication

## Repository Contents

- `index.html`: Main entry point for the web application
- `Corruption-and-Migration-in-Sri-Lanka.R`: R script for data analysis and generation of visualizations
- `Corruptions in Migration Cycle.html`: Interactive visualization of corruption risks in the migration cycle
- `SLBFE Registration Map.html`: Interactive map showing SLBFE registration data
- `sri_lanka_map.html`: Base map of Sri Lanka for visualizations
- `migration_phases.html`: Visual representation of migration phases
- `figures.css`, `styles.css`: CSS files for styling the web application
- `figures.js`, `script.js`: JavaScript files for interactive elements
- `logo.jpeg`, `migration_phases.jpg`, `sri_lanka_map.jpg`: Image assets used in the project
- `LICENSE.md`: License information for the project

## Technical Details

### Dependencies

### Technologies Used

- **R**: For data analysis and generation of initial visualizations
- **HTML/CSS/JavaScript**: For creating an interactive web application
- **Leaflet.js**: For interactive map visualizations

This project relies on the following R packages:

- `ceylon`: Specialized package for creating detailed maps of Sri Lanka's administrative regions
- `ggplot2`: Generation of static plots and maps
- `dplyr`: Data manipulation and wrangling
- `sf`: Handling of spatial data and integration with R's data ecosystem
- `leaflet`: Creation of interactive maps
- `viridis`: Application of perceptually uniform color scales
- `scales`: Formatting of numeric data within plots
- `collapsibleTree`: Development of interactive collapsible tree visualizations
- `htmlwidgets`: Saving interactive visualizations as HTML files

### Installation

To set up the project environment:

1. Install the `ceylon` package from GitHub:

   ```r
   if (!require(devtools)) install.packages("devtools")
   devtools::install_github("thiyangt/ceylon")
   ```

2. Install the remaining packages from CRAN:

   ```r
   install.packages(c("ggplot2", "dplyr", "sf", "leaflet", "viridis", "scales", "collapsibleTree", "htmlwidgets"))
   ```

## Features

### Interactive Map
The `SLBFE Registration Map.html` provides an interactive visualization of migration data across different regions of Sri Lanka.

### Migration Cycle Visualization
`Corruptions in Migration Cycle.html` offers an interactive exploration of various stages in the migration process and associated corruption risks.

### Data Analysis
The R script (`Corruption-and-Migration-in-Sri-Lanka.R`) contains the data analysis pipeline, including data cleaning, processing, and generation of visualizations.

## Customization

- Modify `styles.css` and `figures.css` to change the appearance of the web application.
- Update `script.js` and `figures.js` to alter the interactive behavior of the visualizations.

## Data Sources

- Primary data sourced from the Sri Lanka Bureau of Foreign Employment (SLBFE) for the year 2022.
- Additional data on corruption practices compiled from various academic and governmental sources (see References).

## Future Work

- Incorporate time-series analysis to track changes in migration patterns over multiple years.
- Expand the dataset to include more specific types of corrupt practices and their prevalence.
- Develop a Shiny app for more interactive exploration of the data.

## References

1. Talagala, T. S. (2023). ceylon: Creating Maps of Sri Lanka Administrative Regions, Rivers and Streams. Zenodo. https://doi.org/10.5281/zenodo.10432141
2. Sri Lanka Bureau of Foreign Employment. (2022). Annual Statistical Report on Foreign Employment.
3. Transparency International. (2022). Corruption Perceptions Index 2022: Sri Lanka.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for full details.

## Contributing

We welcome contributions to this project! 

## Contact

For any questions or feedback regarding this project, please open an issue in this repository or contact the project maintainer at [kmunugoda@gmail.com].
