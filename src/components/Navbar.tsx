import React from "react";
import { Box, Button, Heading, HStack, Spinner } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../redux/store";
import { api, useGetUserQuery, useLogoutMutation } from "../services";

function Navbar() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { data: user, isFetching } = useGetUserQuery();
  const [logout] = useLogoutMutation();

  const handleLogout = async () => {
    await logout();
    dispatch(api.util.resetApiState());
  };

  return (
    <HStack
      px={[4, 12]}
      align="center"
      justify="space-between"
      h="20"
      borderBottom="1px"
      borderColor="gray.200"
    >
      <Link to="/">
        <Heading size="md">Erlan Karagulov</Heading>
      </Link>
      <Box>
        {isFetching ? (
          <Spinner />
        ) : (
          <>
            {user ? (
              <Button onClick={handleLogout}>Logout</Button>
            ) : (
              <Button onClick={() => navigate("/login")}>Login</Button>
            )}
          </>
        )}
      </Box>
    </HStack>
  );
}

export default Navbar;
