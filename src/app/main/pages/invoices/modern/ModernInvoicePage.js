import React, {Component} from 'react';
import {withStyles, Card, CardContent, Typography} from '@material-ui/core';
import {darken} from '@material-ui/core/styles/colorManipulator';
import {FuseAnimate} from '@fuse';
import classNames from 'classnames';
import axios from 'axios';

const styles = theme => ({
    root   : {
        background: 'radial-gradient(' + darken(theme.palette.primary.dark, 0.5) + ' 0%, ' + theme.palette.primary.dark + ' 80%)',
        color     : theme.palette.primary.contrastText
    },
    divider: {
        backgroundColor: theme.palette.divider
    }
});

class ModernInvoicePage extends Component {

    state = {
        invoice: null
    };

    componentDidMount()
    {
        axios.get('/api/invoices/get-invoice', {
            params: {id: '5725a6802d'}
        }).then(res => {
            this.setState({invoice: res.data});
        });
    }

    render()
    {
        const {classes} = this.props;
        const {invoice} = this.state;
        const formatter = new Intl.NumberFormat('en-US',
            {
                style                : 'currency',
                currency             : 'USD',
                minimumFractionDigits: 2
            });

        return (
            <div className={classNames(classes.root, "flex-grow flex-no-shrink p-0 sm:p-64 print:p-0")}>

                {invoice && (

                    <FuseAnimate animation={{translateY: [0, '100%']}} duration={600}>

                        <Card className="mx-auto w-xl print:w-full print:shadow-none">

                            <CardContent className="p-88 print:p-0">

                                <div className="flex flex-row justify-between items-start">

                                    <div className="flex flex-col">

                                        <div className="flex items-center mb-80 print:mb-0">

                                            <img className="w-160 print:w-60" src="assets/images/logos/fuse.svg" alt="logo"/>

                                            <div className={classNames(classes.divider, "mx-48 w-px h-128 print:mx-16")}/>

                                            <div className="max-w-160">

                                                <Typography color="textSecondary">{invoice.from.title}</Typography>

                                                {invoice.from.address && (
                                                    <Typography color="textSecondary">
                                                        {invoice.from.address}
                                                    </Typography>
                                                )}
                                                {invoice.from.phone && (
                                                    <Typography color="textSecondary">
                                                        <span>Phone:</span>
                                                        {invoice.from.phone}
                                                    </Typography>
                                                )}
                                                {invoice.from.email && (
                                                    <Typography color="textSecondary">
                                                        <span>Email:</span>
                                                        {invoice.from.email}
                                                    </Typography>
                                                )}
                                                {invoice.from.website && (
                                                    <Typography color="textSecondary">
                                                        <span>Web:</span>
                                                        {invoice.from.website}
                                                    </Typography>
                                                )}
                                            </div>
                                        </div>

                                        <div className="flex items-center">
                                            <div className="flex justify-end items-center w-160 print:w-60">
                                                <Typography variant="h5" className="font-light print:text-16" color="textSecondary">CLIENT</Typography>
                                            </div>

                                            <div className={classNames(classes.divider, "mx-48 w-px h-128 print:mx-16")}/>

                                            <div className="max-w-160">

                                                <Typography color="textSecondary">{invoice.client.title}</Typography>

                                                {invoice.client.address && (
                                                    <Typography color="textSecondary">
                                                        {invoice.client.address}
                                                    </Typography>
                                                )}
                                                {invoice.client.phone && (
                                                    <Typography color="textSecondary">
                                                        <span>Phone:</span>
                                                        {invoice.client.phone}
                                                    </Typography>
                                                )}
                                                {invoice.client.email && (
                                                    <Typography color="textSecondary">
                                                        <span>Email:</span>
                                                        {invoice.client.email}
                                                    </Typography>
                                                )}
                                                {invoice.client.website && (
                                                    <Typography color="textSecondary">
                                                        <span>Web:</span>
                                                        {invoice.client.website}
                                                    </Typography>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    <table>
                                        <tbody>
                                            <tr>
                                                <td className="pr-16 pb-32">
                                                    <Typography className="font-light" variant="h4" color="textSecondary">
                                                        INVOICE
                                                    </Typography>
                                                </td>
                                                <td className="pb-32">
                                                    <Typography className="font-light" variant="h4" color="inherit">
                                                        {invoice.number}
                                                    </Typography>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td className="text-right pr-16">
                                                    <Typography color="textSecondary">
                                                        INVOICE DATE
                                                    </Typography>
                                                </td>
                                                <td>
                                                    <Typography color="inherit">
                                                        {invoice.date}
                                                    </Typography>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td className="text-right pr-16">
                                                    <Typography color="textSecondary">
                                                        DUE DATE
                                                    </Typography>
                                                </td>
                                                <td>
                                                    <Typography color="inherit">
                                                        {invoice.dueDate}
                                                    </Typography>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td className="text-right pr-16">
                                                    <Typography color="textSecondary">
                                                        TOTAL DUE
                                                    </Typography>
                                                </td>
                                                <td>
                                                    <Typography color="inherit">
                                                        {formatter.format(invoice.total)}
                                                    </Typography>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className="mt-96 print:mt-0">

                                    <table className="simple invoice-table">
                                        <thead>
                                            <tr>
                                                <th>
                                                    SERVICE
                                                </th>
                                                <th>
                                                    UNIT
                                                </th>
                                                <th className="text-right">
                                                    UNIT PRICE
                                                </th>
                                                <th className="text-right">
                                                    QUANTITY
                                                </th>
                                                <th className="text-right">
                                                    TOTAL
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {invoice.services.map((service) => (
                                                <tr key={service.id}>
                                                    <td>
                                                        <Typography className="mb-8" variant="subtitle1">{service.title}</Typography>
                                                        <Typography variant="caption">{service.detail}</Typography>
                                                    </td>
                                                    <td>
                                                        {service.unit}
                                                    </td>
                                                    <td className="text-right">
                                                        {formatter.format(service.unitPrice)}
                                                    </td>
                                                    <td className="text-right">
                                                        {service.quantity}
                                                    </td>
                                                    <td className="text-right">
                                                        {formatter.format(service.total)}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>

                                    <table className="simple">
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <Typography className="font-medium" variant="subtitle1" color="textSecondary">SUBTOTAL</Typography>
                                                </td>
                                                <td className="text-right">
                                                    <Typography className="font-medium" variant="subtitle1" color="textSecondary">
                                                        {formatter.format(invoice.subtotal)}
                                                    </Typography>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <Typography className="font-medium" variant="subtitle1" color="textSecondary">TAX</Typography>
                                                </td>
                                                <td className="text-right">
                                                    <Typography className="font-medium" variant="subtitle1" color="textSecondary">
                                                        {formatter.format(invoice.tax)}
                                                    </Typography>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <Typography className="font-medium" variant="subtitle1" color="textSecondary">DISCOUNT</Typography>
                                                </td>
                                                <td className="text-right">
                                                    <Typography className="font-medium" variant="subtitle1" color="textSecondary">
                                                        {formatter.format(invoice.discount)}
                                                    </Typography>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <Typography className="font-light" variant="h4" color="textSecondary">TOTAL</Typography>
                                                </td>
                                                <td className="text-right">
                                                    <Typography className="font-light" variant="h4" color="textSecondary">
                                                        {formatter.format(invoice.total)}
                                                    </Typography>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>

                                </div>

                                <div className="mt-96 print:mt-0 print:px-16">

                                    <Typography className="mb-24 print:mb-12" variant="body1">Please pay within 15 days. Thank you for your business.</Typography>

                                    <div className="flex">

                                        <div className="flex-no-shrink mr-24">
                                            <img className="w-32" src="assets/images/logos/fuse.svg" alt="logo"/>
                                        </div>

                                        <Typography className="font-medium mb-64" variant="caption" color="textSecondary">
                                            In condimentum malesuada efficitur. Mauris volutpat placerat auctor. Ut ac congue dolor. Quisque
                                            scelerisque lacus sed feugiat fermentum. Cras aliquet facilisis pellentesque. Nunc hendrerit
                                            quam at leo commodo, a suscipit tellus dapibus. Etiam at felis volutpat est mollis lacinia.
                                            Mauris placerat sem sit amet velit mollis, in porttitor ex finibus. Proin eu nibh id libero
                                            tincidunt lacinia et eget eros.
                                        </Typography>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </FuseAnimate>
                )}
            </div>
        );
    }
}

export default withStyles(styles, {withTheme: true})(ModernInvoicePage);
/**

 Use the following elements to add breaks to your pages. This will make sure that the section in between
 these elements will be printed on a new page. The following two elements must be used before and after the
 page content that you want to show as a new page. So, you have to wrap your content with them.

 Elements:
 ---------
 <div className="page-break-after"></div>
 <div className="page-break-before"></div>


 Example:
 --------

 Initial page content!

 <div className="page-break-after"></div>
 <div className="page-break-before"></div>

 This is the second page!

 <div className="page-break-after"></div>
 <div className="page-break-before"></div>

 This is the third page!

 <div className="page-break-after"></div>
 <div className="page-break-before"></div>
 **/
