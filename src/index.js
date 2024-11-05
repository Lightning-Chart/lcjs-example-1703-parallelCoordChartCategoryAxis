const lcjs = require('@lightningchart/lcjs')
const { lightningChart, Themes, AxisTickStrategies } = lcjs

const lc = lightningChart({
            resourcesBaseUrl: new URL(document.head.baseURI).origin + new URL(document.head.baseURI).pathname + 'resources/',
        })
const chart = lc
    .ParallelCoordinateChart({
        theme: Themes[new URLSearchParams(window.location.search).get('theme') || 'darkGold'] || undefined,
    })
    .setTitle('Parallel Coordinate Chart Category + Date-Time Axes')

fetch(document.head.baseURI + 'examples/assets/1703/training-by-shoe-category.json')
    .then((r) => r.json())
    .then((data) => {
        const shoeBrands = ['Other', 'Izumi', 'Adidas', 'Mizuno', 'Brooks', 'New Balance']
        data = data.map((sample) => ({
            ...sample,
            // Map categorical data to number indexes (0, 1, 2, 3, 4).
            shoe_brand: shoeBrands.indexOf(sample.shoe_brand),
            // Add derived category data. Basically showing duplicate of another data property, but based on some logical condition.
            over_5_miles: sample.miles_run > 5 ? 1 : 0,
            after_2020: sample.training_date > 1577829600000 ? 1 : 0,
        }))

        const Axes = {
            training_date: 0,
            miles_run: 1,
            training_time: 2,
            shoe_brand: 3,
            over_5_miles: 4,
            after_2020: 5,
        }
        chart.setAxes(Axes)
        data.forEach((sample) =>
            chart
                .addSeries({ automaticColorIndex: 0 })
                .setData(sample)
                .setColor((color) => color.setA(60)),
        )
        // Stroke thickness -1 is recommended for parallel coordinate charts with large data amounts, and especially if fill is transparent.
        // This results in 1 px thin lines without any overlapping segments within 1 series.
        chart.setSeriesStrokeThickness(-1)
        chart.setUnselectedSeriesColor((color) => color.setA(10))

        // Make "Shoe brand", "over 5 miles?" and "after 2020?" axes Categorical.
        chart
            .getAxis(Axes.shoe_brand)
            .setTickStrategy(AxisTickStrategies.Empty, (strategy) =>
                strategy.setCursorFormatter((value) => shoeBrands[Math.round(value)] ?? ''),
            )
        shoeBrands.forEach((brand, i) => chart.getAxis(Axes.shoe_brand).addCustomTick().setValue(i).setMouseInteractions(false))

        chart
            .getAxis(Axes.over_5_miles)
            .setTickStrategy(AxisTickStrategies.Empty, (strategy) =>
                strategy.setCursorFormatter((value) => (value ? '> 5 miles' : '< 5 miles')),
            )
        chart.getAxis(Axes.over_5_miles).addCustomTick().setValue(0).setMouseInteractions(false).setLabelAlignment(-1)
        chart.getAxis(Axes.over_5_miles).addCustomTick().setValue(1).setMouseInteractions(false).setLabelAlignment(1)

        chart
            .getAxis(Axes.after_2020)
            .setTickStrategy(AxisTickStrategies.Empty, (strategy) =>
                strategy.setCursorFormatter((value) => (value ? 'After 2020' : 'Before 2020')),
            )
        chart.getAxis(Axes.after_2020).addCustomTick().setValue(0).setMouseInteractions(false).setLabelAlignment(-1)
        chart.getAxis(Axes.after_2020).addCustomTick().setValue(1).setMouseInteractions(false).setLabelAlignment(1)

        // Configure nice labels and formatting for Axes.
        chart.getAxis(Axes.training_date).setTitle('Training date').setTickStrategy(AxisTickStrategies.DateTime)
        chart.getAxis(Axes.miles_run).setTitle('Miles run')
        chart.getAxis(Axes.training_time).setTitle('Training duration').setTickStrategy(AxisTickStrategies.Time)
        chart.getAxis(Axes.shoe_brand).setTitle('Shoe brand')
        chart.getAxis(Axes.over_5_miles).setTitle('Short or long')
        chart.getAxis(Axes.after_2020).setTitle('Time period')
    })
