import React from "react";
import { Button } from "antd";

type Props = {
    onClick: React.MouseEventHandler<HTMLElement>;
    disabled?: boolean;
    icon: React.ReactNode;
};

const IconButton = (props: Props) => {
    const { icon, onClick, disabled } = props;
    return (
        <Button
            onClick={onClick}
            style={{ borderColor: "transparent", boxShadow: "none" }}
            className="icon-hover"
            disabled={disabled}
            shape="circle"
            size="small"
        >
            {icon}
        </Button>
    );
};

export default IconButton;
