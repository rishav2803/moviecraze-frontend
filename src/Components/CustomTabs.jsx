import { Tab, TabList, Tabs } from "@chakra-ui/react";

function CustomTabs({onFilter,filter}) {
  console.log(filter,onFilter);
  return (
    <Tabs variant="soft-rounded" size="sm" colorScheme="yellow">
      <TabList color="white">
        {["All", "Action", "Comedy", "Horror"].map((tab, index) => (
          <Tab
            key={index}
            color="white"
            mx="3"
            borderColor="#363636"
            borderWidth="2px"
            fontSize="sm"
            border={filter==tab?"2px solid yellow":""}
            onClick={()=>{onFilter(tab)}}
          >
            {tab}
          </Tab>
        ))}
      </TabList>
    </Tabs>
  );
}

export default CustomTabs;
