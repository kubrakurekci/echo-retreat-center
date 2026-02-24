import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import React from "react";
function Features({ service }) {
  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {service.features.map((feature) => (
        <React.Fragment key={feature.category}>
          <h3 className="text-xl font-bold mb-2 capitalize">
            {feature.category}
          </h3>

          {feature.items.map((item) => (
            <ListItem key={item.id}>
              <ListItemAvatar>
                <Avatar>{item.icons}</Avatar>
              </ListItemAvatar>
              <ListItemText primary={item.description} />
            </ListItem>
          ))}
        </React.Fragment>
      ))}
    </List>
  );
}
export default Features;