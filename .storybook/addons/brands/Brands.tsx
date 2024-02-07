import React from "react";
import { Icons, IconButton } from '@storybook/components';

function Brands(props) {
    return (
        <IconButton active= { props.active } title="Show a Storybook toolbar" >
            <Icons icon="mirror" />
        </IconButton>
    )
}

export default Brands;