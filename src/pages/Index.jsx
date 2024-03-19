import React, { useState } from "react";
import { Box, Heading, Text, Textarea, Input, Select, Checkbox, Button, Stack, Code, useToast } from "@chakra-ui/react";

const Index = () => {
  const [description, setDescription] = useState("");
  const [rows, setRows] = useState(1);
  const [format, setFormat] = useState("json");
  const [cleanSpelling, setCleanSpelling] = useState(false);
  const [textFormatting, setTextFormatting] = useState(false);
  const [extractEntities, setExtractEntities] = useState(false);
  const [matchMode, setMatchMode] = useState("simple");
  const [match, setMatch] = useState("");
  const [replace, setReplace] = useState("");
  const [sampleResult, setSampleResult] = useState(null);
  const toast = useToast();

  const handleSubmit = () => {
    // TODO: Implement actual ETL logic here
    const result = {
      description: "Cleaned product description goes here",
      entities: ["entity1", "entity2"],
    };
    setSampleResult(result);
    toast({
      title: "ETL Completed",
      description: "View the sample results below",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Box maxWidth="800px" margin="auto" padding={8}>
      <Heading as="h1" size="xl" marginBottom={8}>
        Product Description Cleaner
      </Heading>

      <Stack spacing={6}>
        <Box>
          <Text fontSize="xl" fontWeight="bold" marginBottom={2}>
            Enter a sample item's description
          </Text>
          <Textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Enter description here..." size="lg" />
        </Box>

        <Box>
          <Text fontSize="xl" fontWeight="bold" marginBottom={2}>
            Enter the number of rows
          </Text>
          <Input type="number" value={rows} onChange={(e) => setRows(e.target.value)} size="lg" />
        </Box>

        <Box>
          <Text fontSize="xl" fontWeight="bold" marginBottom={2}>
            Select the format the data will be supplied in
          </Text>
          <Select value={format} onChange={(e) => setFormat(e.target.value)} size="lg">
            <option value="json">JSON</option>
            <option value="sql">SQL</option>
            <option value="zip">ZIP</option>
            <option value="tar">TAR</option>
            <option value="csv">CSV</option>
            <option value="txt">TXT</option>
            <option value="other">Other (Describe below)</option>
          </Select>
          {format === "other" && <Input marginTop={4} placeholder="Describe the format" size="lg" />}
        </Box>

        <Box>
          <Text fontSize="xl" fontWeight="bold" marginBottom={2}>
            Select data cleaning options
          </Text>
          <Stack>
            <Checkbox isChecked={cleanSpelling} onChange={(e) => setCleanSpelling(e.target.checked)}>
              Clean spelling
            </Checkbox>
            <Checkbox isChecked={textFormatting} onChange={(e) => setTextFormatting(e.target.checked)}>
              Text formatting
            </Checkbox>
            <Checkbox isChecked={extractEntities} onChange={(e) => setExtractEntities(e.target.checked)}>
              Extract named entities
            </Checkbox>
          </Stack>
        </Box>

        <Box>
          <Text fontSize="xl" fontWeight="bold" marginBottom={2}>
            Post Processing
          </Text>
          <Stack direction="row" spacing={4} alignItems="center">
            <Select value={matchMode} onChange={(e) => setMatchMode(e.target.value)} size="lg" width="200px">
              <option value="simple">Simple</option>
              <option value="regex">Regex</option>
            </Select>
            <Input value={match} onChange={(e) => setMatch(e.target.value)} placeholder="Match this" size="lg" />
            <Input value={replace} onChange={(e) => setReplace(e.target.value)} placeholder="Replace with" size="lg" />
          </Stack>
        </Box>

        <Button onClick={handleSubmit} colorScheme="blue" size="lg">
          Clean Product Descriptions
        </Button>

        {sampleResult && (
          <Box marginTop={8}>
            <Heading size="lg" marginBottom={4}>
              Sample Results
            </Heading>
            <Box marginBottom={4}>
              <Text fontWeight="bold">Structured JSON</Text>
              <Code>{JSON.stringify(sampleResult, null, 2)}</Code>
            </Box>
            <Box>
              <Text fontWeight="bold">Cleaned Product Description</Text>
              <Text>{sampleResult.description}</Text>
            </Box>
          </Box>
        )}

        <Stack direction="row" spacing={4}>
          <Button size="lg">View Cost Estimate</Button>
          <Button colorScheme="green" size="lg">
            Order Now
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Index;
