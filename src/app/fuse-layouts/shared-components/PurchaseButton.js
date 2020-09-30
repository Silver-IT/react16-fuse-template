import React from 'react';
import {Button, Icon} from '@material-ui/core';

const PurchaseButton = () => {
    return (
        <Button component="a"
                href="https://themeforest.net/item/fuse-react-react-redux-material-design-admin-template/21769397?ref=withinpixels"
                target="_blank"
                rel="noreferrer noopener"
                role="button"
                className="normal-case"
                variant="contained"
                color="secondary">
            <Icon className="text-16 mr-4">shopping_cart</Icon>
            <span>Purchase FUSE React</span>
        </Button>
    );
};

export default PurchaseButton;
