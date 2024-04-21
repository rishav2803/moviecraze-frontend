/* eslint-disable react/prop-types */
import { ArrowRightIcon } from "@chakra-ui/icons";
import { Box, Flex, Text } from "@chakra-ui/react";
import { themeConfig } from "../Utils/themeConfig";
import CustomTabs from "./CustomTabs";

function Heading({ heading, pb, customTabs = false,onFilter,filter}) {
  return (
    <Box px={8} >
      <Flex
        borderBottom={`2px solid ${themeConfig.iconstextColor}`}
        pb={pb}
        alignItems="center"
        justifyContent="space-between"
      >
        <Box>
          <Text fontSize="2xl" color={"white"} fontWeight="bold" as="span">
            {heading}
          </Text>
          <ArrowRightIcon mb={1} mx={4} color={themeConfig.iconstextColor} />
        </Box>

        {customTabs && <CustomTabs onFilter={onFilter} filter={filter}/>}
      </Flex>
    </Box>
  );
}

export default Heading;
