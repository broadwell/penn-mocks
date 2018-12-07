import React from "react";

import ScriptChart from "./ScriptChart";
import MiradorContainer from "./MiradorContainer";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const MiradorTabbed = () => {
  return (
    <Tabs>
      <TabList>
        <Tab>Scriptchart</Tab>
        <Tab>Manuscript Viewer</Tab>
      </TabList>

      <TabPanel>
        <div>
          <ScriptChart />
        </div>
      </TabPanel>
      <TabPanel>
        <div>
          <MiradorContainer />
        </div>
      </TabPanel>
    </Tabs>
  );
};

export default MiradorTabbed;
