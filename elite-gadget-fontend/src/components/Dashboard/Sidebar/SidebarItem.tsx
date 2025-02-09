import {
  AppstoreOutlined,
  FileTextOutlined,
  HeartOutlined,
  LineChartOutlined,
  SettingOutlined,
  ShoppingCartOutlined,
  TeamOutlined,
  UploadOutlined,
} from "@ant-design/icons";

export const adminMenu = [
  {
    key: "1",
    icon: <AppstoreOutlined />,
    label: "Manage Products",
    path: "/dashboard/products",
  },
  {
    key: "2",
    icon: <UploadOutlined />,
    label: "Flash Sales",
    path: "/dashboard/flash-sales",
  },
  {
    key: "3",
    icon: <LineChartOutlined />,
    label: "Analytics",
    path: "/dashboard/analytics",
  },
  {
    key: "4",
    icon: <FileTextOutlined />,
    label: "Orders",
    path: "/dashboard/orders",
  },
  {
    key: "5",
    icon: <TeamOutlined />,
    label: "Users Management",
    path: "/dashboard/users",
  },
];

export const customerMenu = [
  {
    key: "6",
    icon: <ShoppingCartOutlined />,
    label: "My Orders",
    path: "/dashboard/my-orders",
  },
  {
    key: "7",
    icon: <HeartOutlined />,
    label: "Wishlist",
    path: "/dashboard/wishlist",
  },
  {
    key: "8",
    icon: <SettingOutlined />,
    label: "Account Settings",
    path: "/dashboard/settings",
  },
];
