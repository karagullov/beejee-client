import {
  Box,
  BoxProps,
  Button,
  HStack,
  Stack,
  Text,
  RadioGroup,
  Radio,
} from "@chakra-ui/react";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { SortOrder, TodoSortBy } from "../../types";
import {
  selectSortOrder,
  selectSortBy,
  setSortOrder,
  setSortBy,
} from "../../redux/todoSlice";

interface SortProps extends BoxProps {}

export default function SortTodo({ ...props }: SortProps) {
  const dispatch = useAppDispatch();

  const sortOrder = useAppSelector(selectSortOrder);
  const sortBy = useAppSelector(selectSortBy);

  const handleSortChange = (sortBy: TodoSortBy) => {
    dispatch(setSortBy(sortBy));
  };

  const handleOrderChange = (orderBy: SortOrder) => {
    dispatch(setSortOrder(orderBy));
  };

  return (
    <Box {...props}>
      <Text fontSize="24px" textAlign="center" fontWeight="bold">
        Sort by
      </Text>
      <Stack border="1px" borderColor="gray.200" rounded="md" p="4" mt="10px">
        <HStack
          spacing={0}
          justify="space-between"
          alignItems="center"
          mt="1.5"
          wrap="wrap"
          gap="2"
        >
          <HStack
            width="40%"
            flexDirection="column"
            justify="space-between"
            alignItems="start"
          >
            <SortButton
              current="username"
              active={sortBy}
              label="Username"
              onClick={() => handleSortChange("username")}
            />
            <SortButton
              current="email"
              active={sortBy}
              label="E-mail"
              onClick={() => handleSortChange("email")}
            />
            <SortButton
              current="completed"
              active={sortBy}
              label="Completion"
              onClick={() => handleSortChange("completed")}
            />
          </HStack>

          <HStack>
            <RadioGroup onChange={handleOrderChange} value={sortOrder}>
              <Stack direction="row">
                <Radio value="asc">ASC</Radio>
                <Radio value="desc">DESC</Radio>
              </Stack>
            </RadioGroup>
          </HStack>
        </HStack>
      </Stack>
    </Box>
  );
}

function SortButton({
  active,
  current,
  onClick,
  label,
}: {
  active: string;
  current: string;
  onClick: () => void;
  label: string;
}) {
  return (
    <Button
      size="sm"
      {...{ onClick }}
      colorScheme={current === active ? "blue" : "gray"}
    >
      {label}
    </Button>
  );
}
