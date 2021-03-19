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
  Grid,
  GridProps,
  IconButton,
  IconButtonProps,
  CardActions,
  CardActionsProps
} from "@material-ui/core";

//  faIcon
import {
  FontAwesomeIcon,
  FontAwesomeIconProps
} from "@fortawesome/react-fontawesome";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPlus } from "@fortawesome/free-solid-svg-icons";

export const BoldLabel = withStyles(theme =>
  createStyles({
    root: {
      //  display: "inline-block",
      // backgroundColor: theme.colorPicker("grey", { code: "400" }),
      fontSize: 30,
      fontWeight: "bold",
      // padding: theme.spacing(0.5, 2),
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

// とりあえずつくったやつ 品目
export const ItemLabel = withStyles(theme =>
  createStyles({
    root: {
      fontSize: theme.fontSize("basic"),
      color: theme.colorPicker("grey", { code: "500" })
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
// 追加ボタンの＋
// export const AddIcon = () => <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>;
// Container ?
export const ServiceItemContent = styled.div(({ theme }) => {
  return {
    width: 300,
    padding: theme.spacing(1, 2)
  };
});
// 各Itemごとの太字部分
export const ItemBoldLabel = withStyles(theme =>
  createStyles({
    root: {
      //  display: "inline-block",
      // backgroundColor: theme.colorPicker("grey", { code: "400" }),
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

interface HeadProps {}
export const Head = styled.div<HeadProps>(({ theme }) => {
  return {
    height: 64,
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  };
});
export const HeadLabel = withStyles(theme =>
  createStyles({
    root: {
      flexGrow: 1,
      fontSize: theme.fontSize("md"),
      color: theme.colorPicker("grey", { code: "500" })
    }
  })
)((props: TypographyProps) => <Typography {...props} />);
export const Description = withStyles(theme =>
  createStyles({
    root: {
      fontSize: theme.fontSize("basic"),
      color: theme.colorPicker("grey", { code: "500" })
    }
  })
)((props: TypographyProps) => <Typography {...props} />);

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

export const ContentWrapper = styled.div(({ theme }) => {
  return {
    width: 300,
    padding: theme.spacing(1, 2)
  };
});

interface StyledFaIconProps extends FontAwesomeIconProps {
  padding?: Number;
}
export const StyledFaIcon = styled(FontAwesomeIcon)<StyledFaIconProps>(
  ({ theme }) => {
    return {};
  }
);
export const StyledIconButton = withStyles(theme =>
  createStyles({})
)((props: IconButtonProps) => <IconButton {...props} />);

interface StyledCardActionsProps extends CardActionsProps {}
export const StyledCardActions = withStyles(theme =>
  createStyles({})
)((props: StyledCardActionsProps) => <CardActions {...props} />);
