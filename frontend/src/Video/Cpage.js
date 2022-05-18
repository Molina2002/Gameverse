import { Box } from "@chakra-ui/layout";
import { useState } from "react";
import Chbox from "./Chbox";
import MyChats from "./MyChats";
import SideDrawer from "../components/miscellaneous/SideDrawer";
import { ChatState } from "../Context/ChatProvider";

const Cpage = () => {
  const [fetchAgain, setFetchAgain] = useState(false);
  const { user } = ChatState();

  return (
    <div style={{ width: "100%", backgroundColor:"black" }}>
      { user && <SideDrawer />}
      <Box d="flex" justifyContent="space-between" w="100%" h="91.5vh" p="10px">
        { user && <MyChats fetchAgain={fetchAgain} />}
        {user && (
          <Chbox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
        )}
      </Box>
    </div>
  );
};

export default Cpage;