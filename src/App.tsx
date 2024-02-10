import { ChakraProvider } from "@chakra-ui/react";
import { Access } from "./features/access/Access";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { File } from "./features/file/File";
import './services/i18n';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Access />,
  },
  {
    path: "file/:fileId",
    element: <File />,
  },
]);

function App() {
  return (
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
}

export default App;
