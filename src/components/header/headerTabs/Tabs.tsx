import React, { useState, useEffect } from "react";
import { Box, Tabs as MuiTabs, Tab } from "@mui/material";
import { TABS, ITab } from "../../../constants";
import { useLocation, Link } from "react-router-dom";

export const Tabs = () => {
  const location = useLocation();
  const [selectedTab, setSelectedTab] = useState(location.pathname);

  useEffect(() => {
    if (location.pathname !== selectedTab) {
      setSelectedTab(location.pathname);
    }
  }, [location.pathname, selectedTab]);

  const handleChangeSelectedTab = (
    _: React.SyntheticEvent,
    newTabValue: string
  ) => setSelectedTab(newTabValue);

  return (
    <Box display="flex" sx={{ display: { xs: "none", md: "flex" } }}>
      <MuiTabs value={selectedTab} onChange={handleChangeSelectedTab}>
        {TABS.map(({ label, route, icon }: ITab) => (
          <Tab
            key={label}
            icon={icon}
            to={route}
            label={label}
            value={route}
            component={Link}
          />
        ))}
      </MuiTabs>
    </Box>
  );
};
