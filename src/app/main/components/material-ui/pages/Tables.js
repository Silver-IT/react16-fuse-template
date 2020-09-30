import React from 'react';
import {FuseExample, FuseHighlight, FusePageSimple} from '@fuse';
import {Button, Icon, Typography} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles/index';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint no-unused-vars: off */
const styles = theme => ({
    layoutRoot: {
        '& .description': {
            marginBottom: 16
        }
    }
});

function Tables({classes})
{
    return (

        <FusePageSimple
            classes={{
                root: classes.layoutRoot
            }}
            header={
                <div className="flex flex-1 items-center justify-between p-24">
                    <div className="flex flex-col">
                        <div className="flex items-center mb-16">
                            <Icon className="text-18" color="action">home</Icon>
                            <Icon className="text-16" color="action">chevron_right</Icon>
                            <Typography color="textSecondary">Components</Typography>
                            <Icon className="text-16" color="action">chevron_right</Icon>
                            <Typography color="textSecondary">Material UI Elements</Typography>
                        </div>
                        <Typography variant="h6">Tables</Typography>
                    </div>
                    <Button
                        className="normal-case"
                        variant="contained"
                        component="a"
                        href="https://material-ui-next.com/demos/tables"
                        target="_blank"
                    >
                        <Icon className="mr-4">link</Icon>
                        Reference
                    </Button>
                </div>
            }
            content={
                <div className="p-24 max-w-2xl mx-auto">
                    <Typography className="text-44 mt-32 mb-8" component="h1">Tables</Typography>
                    <Typography className="description">Data tables display sets of data. They can be fully customized.</Typography>

                    <Typography className="mb-16" component="div"><a href="https://material.io/design/components/data-tables.html">Data tables</a> display information in a way
                        that’s easy to scan, so that users can look for patterns and insights. They can be embedded in primary content, such as cards.</Typography>
                    <Typography className="mb-16" component="div">Data tables can include:</Typography>
                    <ul>
                        <li>A corresponding visualization</li>
                        <li>Navigation</li>
                        <li>Tools to query and manipulate data</li>
                    </ul>
                    <Typography className="mb-16" component="div">When including tools, they should be placed directly above or below the table.</Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Structure</Typography>
                    <Typography className="mb-16" component="div">A data table contains a header row at the top that lists column names, followed by rows for data.</Typography>
                    <Typography className="mb-16" component="div">Checkboxes should accompany each row if the user needs to select or manipulate data.</Typography>
                    <Typography className="mb-16" component="div">For accessibility, the first column is set to be a <code>&lt;th&gt;</code> element, with
                        a <code>scope</code> of <code>&quot;row&quot;</code>. This enables screen readers to identify a cell&#39;s value by it&#39;s row and column
                        name.</Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Simple Table</Typography>
                    <Typography className="mb-16" component="div">A simple example with no frills.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/components/material-ui/material-ui-examples/tables/SimpleTable.js').default}
                        raw={require('!raw-loader!app/main/components/material-ui/material-ui-examples/tables/SimpleTable.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Sorting &amp; Selecting</Typography>
                    <Typography className="mb-16" component="div">This example demonstrates the use of <code>Checkbox</code> and clickable rows for selection, with a
                        custom <code>Toolbar</code>. It uses the <code>TableSortLabel</code> component to help style column headings.</Typography>
                    <Typography className="mb-16" component="div">The Table has been given a fixed width to demonstrate horizontal scrolling. In order to prevent the pagination
                        controls from scrolling, the TablePagination component is used outside of the Table. (The <a href="#custom-table-pagination-action">&#39;Custom Table
                            Pagination Action&#39; example</a> below shows the pagination within the TableFooter.)</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/components/material-ui/material-ui-examples/tables/EnhancedTable.js').default}
                        raw={require('!raw-loader!app/main/components/material-ui/material-ui-examples/tables/EnhancedTable.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Customized Tables</Typography>
                    <Typography className="mb-16" component="div">If you have been reading the <a href="/customization/overrides/">overrides documentation page</a>
                        but you are not confident jumping in,
                        here are examples of how you can change the look of a <code>TableCell</code>.</Typography>
                    <Typography className="mb-16" component="div">
                        <span role="img" aria-label="unicode-symbol">⚠</span>
                        While the material design specification encourages theming, this example is off the beaten path.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/components/material-ui/material-ui-examples/tables/CustomizedTable.js').default}
                        raw={require('!raw-loader!app/main/components/material-ui/material-ui-examples/tables/CustomizedTable.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Custom Table Pagination Action</Typography>
                    <Typography className="mb-16" component="div">The <code>Action</code> property of the <code>TablePagination</code> component allows the implementation of
                        custom actions.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/components/material-ui/material-ui-examples/tables/CustomPaginationActionsTable.js').default}
                        raw={require('!raw-loader!app/main/components/material-ui/material-ui-examples/tables/CustomPaginationActionsTable.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Spanning Table</Typography>
                    <Typography className="mb-16" component="div">A simple example with spanning rows &amp; columns.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/components/material-ui/material-ui-examples/tables/SpanningTable.js').default}
                        raw={require('!raw-loader!app/main/components/material-ui/material-ui-examples/tables/SpanningTable.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Virtualized Table</Typography>
                    <Typography className="mb-16" component="div">In the following example, we demonstrate how to use <a
                        href="https://github.com/bvaughn/react-virtualized">react-virtualized</a> with the <code>Table</code> component. It renders 200 rows and can easily handle
                        more.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/components/material-ui/material-ui-examples/tables/ReactVirtualizedTable.js').default}
                        raw={require('!raw-loader!app/main/components/material-ui/material-ui-examples/tables/ReactVirtualizedTable.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Complementary projects</Typography>
                    <Typography className="mb-16" component="div">For more advanced use cases you might be able to take advantage of:</Typography>
                    <ul>
                        <li><a href="https://devexpress.github.io/devextreme-reactive/react/grid/">dx-react-grid-material-ui</a> A data grid for Material-UI with paging, sorting,
                            filtering, grouping and editing features (<a href="https://js.devexpress.com/licensing/">custom license</a>).
                        </li>
                        <li><a href="https://github.com/gregnb/mui-datatables">mui-datatables</a> Responsive data tables for Material-UI with filtering, sorting, search and more.
                        </li>
                        <li><a href="https://github.com/mbrn/material-table">material-table</a> DataTable based on table component with additional features like search, filtering,
                            sorting and much more.
                        </li>
                        <li><a href="https://github.com/techniq/mui-virtualized-table">mui-virtualized-table</a> Virtualized Material-UI table.</li>
                    </ul>

                </div>
            }
        />

    );
}

export default withStyles(styles, {withTheme: true})(Tables);
