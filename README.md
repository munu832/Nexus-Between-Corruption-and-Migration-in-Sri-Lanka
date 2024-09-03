# Nexus Between Corruption and Migration in Sri Lanka

## Project Overview

This repository contains a comprehensive analysis of the intricate relationship between corruption and migration patterns in Sri Lanka, focusing on data from the Sri Lanka Bureau of Foreign Employment (SLBFE) for the year 2022. The project utilizes R for data visualization and analysis, showcasing a variety of static and interactive visualizations to explore this complex issue.

### Key Features

- **Data-driven Analysis**: Utilizes official SLBFE registration data for 2022
- **Geospatial Visualization**: Includes both static and interactive maps of Sri Lanka
- **Interactive Exploration**: Features a collapsible tree to examine corruption in different migration phases
- **Reproducible Research**: Provides all necessary code and data for replication

## Repository Contents

- `SLBFE_Registration_Map_Static.png`: Static map visualizing district-wise SLBFE registrations (2022)
- `SLBFE_Registration_Map_Interactive.html`: Interactive map for exploring SLBFE registration data by district
- `Key_Figures.png`: Visual representations of key migration phases and associated corrupt practices
- `Collapsible_Tree.html`: Interactive visualization linking migration phases with potential corrupt practices
- `script.R`: R script for generating all visualizations
- `README.md`: This file, providing a comprehensive project overview

## Technical Details

### Dependencies

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

## Usage Guide

1. Clone this repository to your local machine.
2. Ensure all required packages are installed (see Installation section).
3. Open and run `script.R` in your R environment to generate all visualizations.

### Generating Visualizations

- **Static Map**: Created using `ggplot2` and saved as a PNG file.
- **Interactive Map**: Built with `leaflet` and exported as an HTML file for browser viewing.
- **Collapsible Tree**: Generated using the `collapsibleTree` package, linking migration phases with corrupt practices.

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
