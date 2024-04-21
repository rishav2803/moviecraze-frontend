import { Box, Flex, Grid, Progress, Text } from "@chakra-ui/react";

function ReviewSummary({data}) {

  return (
    <Box px={8}>
      <Grid
        templateColumns="0.5fr 1fr"
        gap={6}
        p={6}
        mt={4}
        bgColor="blackAlpha.500"
      >
        <Flex borderRight="1px solid #fff" gap={6} alignItems="center" px={4}>
          <Box
            height="6.5rem"
            width="6.5rem"
            py={3}
            borderRadius="50%"
            bgColor="green.500"
            textAlign="center"
            color="blackAlpha.800"
          >
            <Text as="span" fontSize="5xl" fontWeight="bold">
              {isNaN(data.average_score) ? "N/A" : Math.abs(data.average_score).toFixed(1)}
            </Text>
          </Box>

          <Text
            textTransform="uppercase"
            fontSize="2xl"
            letterSpacing={4}
            opacity={0.6}
          >
            User score
          </Text>
        </Flex>

        <Flex flexDirection="column" justifyContent="center">
          <Box mb={2}>
            <Grid templateColumns="0.3fr 2fr  0.2fr " gap={6}>
              <Text>Positive</Text>
              <Progress colorScheme="green" value={data.positive_percentage} mt={1.5} />
              <Text fontWeight="medium">
                {data.positive_percentage}%
              </Text>
            </Grid>
          </Box>

          <Box>
            <Grid templateColumns="0.3fr 2fr  0.2fr " gap={6}>
              <Text>Negative</Text>
              <Progress colorScheme="red" value={data.negative_percentage} mt={1.5} />
              <Text fontWeight="medium">{data.negative_percentage}%</Text>
            </Grid>
          </Box>
        </Flex>
      </Grid>
    </Box>
  );
}

export default ReviewSummary;
