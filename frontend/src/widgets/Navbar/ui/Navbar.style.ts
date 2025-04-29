import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

// Стили для Header
export const Header = styled("header")(() => ({
  height: "70px", // Использование темы для управления высотой
  backgroundColor: "#212121",
  color: "#fff",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0 180px",
  fontWeight: 500,
  cursor: "default",
}));

// Стили для Navigation
export const Navigation = styled("nav")(() => ({
  height: "48px",
  padding: "0 180px",
  boxShadow:
    "0px 2px 1px rgba(0, 0, 0, 0.2), 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 1px 3px rgba(0, 0, 0, 0.12)",
  display: "flex",
  alignItems: "center",
}));

interface NavItemProps {
  isActive?: boolean;
}

export const NavItem = styled(Button)<NavItemProps>(({ theme, isActive }) => ({

  transition: "all 0.5s",
  fontWeight: 500,
  fontSize: "14px",
  lineHeight: "24px",
  borderRadius: 0,
  color: isActive ? theme.palette.primary.main : theme.palette.text.secondary,
  borderBottom: isActive ? `2px solid ${theme.palette.primary.main}` : "none",
  backgroundColor: "#fff",
  width: "220px",
  height: "100%",
}));
