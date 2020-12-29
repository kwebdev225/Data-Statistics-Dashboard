import React from "react";
import { Grid, IconButton } from "@material-ui/core";
import LaunchIcon from "@material-ui/icons/Launch";
import DehazeIcon from "@material-ui/icons/Dehaze";
import Selection from "../Select";

function DashAddon(props: any) {
  return (
    <Grid item md={12}>
      <Grid
        container
        justify="flex-start"
        alignItems="center"
        style={{ position: "relative" }}
      >
        <Grid item md={1}>
          <IconButton
            id={props.index}
            onClick={(e) => {
              props.onAnchorEl(e.currentTarget);
              props.onIndex(e.currentTarget.id);
            }}
            style={{ padding: 0 }}
          >
            <DehazeIcon />
          </IconButton>
          <Selection
            selected={props.selected}
            anchorEl={props.anchorEl}
            onAnchorEl={(value: any) => props.onAnchorEl(value)}
            onSelected={(value: any) => props.onSelected(value)}
          />
        </Grid>
        <Grid item md={10} />
        <Grid item md={1}>
          <IconButton
            style={{
              padding: 0,
              position: "absolute",
              right: 0,
              top: 10,
            }}
            onClick={() => props.onSubChart(props.index)}
          >
            <LaunchIcon />
          </IconButton>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default DashAddon;