import React from "react";
import styled from "styled-components";
//このファイルにとりあえずコンポーネントをつくる

//  mui
import {
  createStyles,
  Typography,
  TypographyProps,
  withStyles,
  ButtonProps,
  Button,
  Card,
  CardProps,
  IconButton,
  IconButtonProps
} from "@material-ui/core";

//  faIcon
import {
  FontAwesomeIcon,
  FontAwesomeIconProps
} from "@fortawesome/react-fontawesome";

export const BoldLabel = withStyles(theme =>
  createStyles({
    root: {
      fontSize: 30,
      fontWeight: "bold",
      borderRadius: theme.shape.borderRadius
    }
  })
)((props: TypographyProps) => <Typography {...props} />);

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
// 追加ボタン
export const AddItemButton = withStyles(theme =>
  createStyles({
    root: {
      // fontSize: theme.fontSize("basic"),
      color: theme.colorPicker("grey", { code: "500" })
    }
  })
)((props: ButtonProps) => <Button {...props} variant="outlined" />);
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
// 品目の枠（すべてにつかえる？）
export const ServiceItemCard = withStyles(theme =>
  createStyles({
    root: {
      fontSize: theme.fontSize("basic"),
      padding: 10,
      margin: theme.spacing(2, 0),
      border: "1px solid black",
      borderRadius: 0
    }
  })
)((props: CardProps) => <Card {...props} variant="outlined" />);

// styledコンポーネント（独自）のかきかた
interface ServiceContainerProps {}
export const ServiceContainer = styled.div<ServiceContainerProps>(
  ({ theme }) => {
    return {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "flex-start"
    };
  }
);

interface StyledFaIconProps extends FontAwesomeIconProps {
  padding?: Number;
}
export const StyledFaIcon = styled(FontAwesomeIcon)<StyledFaIconProps>(
  ({ theme }) => {
    return {};
  }
);
interface StyledIconProps extends IconButtonProps {
  float?: string;
}
export const StyledIconButton = withStyles(theme =>
  createStyles({})
)((props: IconButtonProps) => <IconButton {...props} />);
