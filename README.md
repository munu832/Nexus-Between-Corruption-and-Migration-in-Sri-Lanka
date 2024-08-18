# SLBFE Registration Map

This repository contains a project for visualizing the total registration with the Sri Lanka Bureau of Foreign Employment (SLBFE) by districts for the year 2022. The project includes a static map and an interactive map created using R.

## Project Overview

The project utilizes the `ceylon` R package to create maps of Sri Lanka's administrative regions. The map data is then enriched with registration data for each district and visualized both as a static plot and as an interactive leaflet map.

### Files in the Repository

- **SLBFE_Registration_Map_Static.png**: A static map showing the total registrations with SLBFE by district.
- **SLBFE_Registration_Map_Interactive.html**: An interactive map that allows users to explore registration data by district.
- **script.R**: The R script used to create the static and interactive maps.
- **README.md**: This file, providing an overview of the project.

## Dependencies

This project depends on several R packages:

- **ceylon**: Used for creating maps of Sri Lanka's administrative regions.
- **ggplot2**: For creating the static plot.
- **dplyr**: For data manipulation.
- **sf**: For handling spatial data.
- **leaflet**: For creating interactive maps.
- **viridis**: For color scales.
- **scales**: For formatting numbers.
- **htmlwidgets**: For saving the interactive map as an HTML file.

## Installation

To run this project, you need to install the necessary R packages. You can install the `ceylon` package from GitHub using `devtools`:

```r
if (!require(devtools)) install.packages("devtools")
devtools::install_github("thiyangt/ceylon")
```

You can install the other packages from CRAN:

```r
install.packages(c("ggplot2", "dplyr", "sf", "leaflet", "viridis", "scales", "htmlwidgets"))
```

## Usage

Run the R script (`script.R`) to generate the static and interactive maps. The interactive map is saved as `SLBFE_Registration_Map_Interactive.html` and can be opened in any web browser.

## References

- **Package Citation**: Talagala, T. S. (2023). *ceylon: Creating Maps of Sri Lanka Administrative Regions, Rivers and Streams*. Zenodo. [https://doi.org/10.5281/zenodo.10432141](https://doi.org/10.5281/zenodo.10432141)
  
## License

This project is licensed under the MIT License. See the `LICENSE` file for more details.

---
