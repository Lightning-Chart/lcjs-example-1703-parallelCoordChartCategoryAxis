# Parallel Coordinate Chart with Category and Date-Time axes

![Parallel Coordinate Chart with Category and Date-Time axes](parallelCoordChartCategoryAxis-darkGold.png)

This demo application belongs to the set of examples for LightningChart JS, data visualization library for JavaScript.

LightningChart JS is entirely GPU accelerated and performance optimized charting library for presenting massive amounts of data. It offers an easy way of creating sophisticated and interactive charts and adding them to your website or web application.

The demo can be used as an example or a seed project. Local execution requires the following steps:

-   Make sure that relevant version of [Node.js](https://nodejs.org/en/download/) is installed
-   Open the project folder in a terminal:

          npm install              # fetches dependencies
          npm start                # builds an application and starts the development server

-   The application is available at _http://localhost:8080_ in your browser, webpack-dev-server provides hot reload functionality.


## Description

Example of two distinct use cases within Parallel coordinate charts:

1. Category Axes
2. Date-Time Axes

In the application, there are two Category Axes, "Short or long" and "Time period".
Category axes can be displayed by disabling the tick strategy, placing desired ticks manually (`addCustomTick`) and specifying the formatting (e.g. `0` -> `"< 5 miles"`, `1` -> `"> 5 miles"`)

Date-Time axes work just like in other chart types, data points can be inputted as UTC timestamps, and the built-in Date-Time axis tick strategy works wonderfully.

The example context is analysis of different shoe brands against several variables such as:
- Time (2018 - 2022)
- Training duration (hours)
- Running distance (miles)

## API Links



## Support

If you notice an error in the example code, please open an issue on [GitHub][0] repository of the entire example.

Official [API documentation][1] can be found on [LightningChart][2] website.

If the docs and other materials do not solve your problem as well as implementation help is needed, ask on [StackOverflow][3] (tagged lightningchart).

If you think you found a bug in the LightningChart JavaScript library, please contact sales@lightningchart.com.

Direct developer email support can be purchased through a [Support Plan][4] or by contacting sales@lightningchart.com.

[0]: https://github.com/Arction/
[1]: https://lightningchart.com/lightningchart-js-api-documentation/
[2]: https://lightningchart.com
[3]: https://stackoverflow.com/questions/tagged/lightningchart
[4]: https://lightningchart.com/support-services/

© LightningChart Ltd 2009-2025. All rights reserved.



