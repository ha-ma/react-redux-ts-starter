import React from "react";
import styled from "styled-components";

//  mui
import {
  createStyles,
  Typography,
  TypographyProps,
  withStyles,
  Card,
  CardProps
} from "@material-ui/core";

export const Code = withStyles(theme =>
  createStyles({
    root: {
      display: "inline-block",
      backgroundColor: theme.colorPicker("grey", { code: "400" }),
      padding: theme.spacing(0.5, 2),
      color: theme.colorPicker("white"),
      fontWeight: "bold",
      borderRadius: theme.shape.borderRadius
    }
  })
)((props: TypographyProps) => <Typography {...props} />);

// 各Itemごとの太字部分
export const ItemBoldLabel = withStyles(theme =>
  createStyles({
    root: {
      color: theme.colorPicker("black"),
      fontSize: 20,
      fontWeight: "bold",
      padding: theme.spacing(0.5, 2)
    }
  })
)((props: TypographyProps) => <Typography {...props} />);
export const ServiceItemCard = withStyles(theme =>
  createStyles({
    root: {
      fontSize: theme.fontSize("basic"),
      // color: theme.colorPicker("black"),
      padding: 10,
      margin: theme.spacing(2, 0),
      border: "1px solid black",
      borderRadius: 0
    }
  })
)((props: CardProps) => <Card {...props} variant="outlined" />);

// 契約者数
export const CountContructer = withStyles(theme =>
  createStyles({
    root: {
      fontSize: 15,
      fontWeight: "bold",
      color: theme.colorPicker("black")
    }
  })
)((props: TypographyProps) => <Typography {...props} />);

// 契約者数
export const CountContructerChar = withStyles(theme =>
  createStyles({
    root: {
      fontSize: 10,
      fontWeight: "bold",
      color: theme.colorPicker("grey")
    }
  })
)((props: TypographyProps) => <Typography {...props} />);
