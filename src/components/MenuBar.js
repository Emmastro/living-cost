import Link from "@mui/material/Link";
import Toolbar from "@mui/material/Toolbar";

export const MenuBar = () => {
  return (
    <Toolbar sx={{ flexWrap: "wrap" }}>
      <Link variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }} href={"/"}>
        Living Cost
      </Link>
      <nav>
        <Link
          variant="button"
          color="text.primary"
          href="/cost-of-living"
          sx={{ my: 1, mx: 1.5 }}
        >
          Cost of Living
        </Link>

        <Link
          variant="button"
          color="text.primary"
          href="/about"
          sx={{ my: 1, mx: 1.5 }}
        >
          About
        </Link>
        <Link
          variant="button"
          color="text.primary"
          href="/contact"
          sx={{ my: 1, mx: 1.5 }}
        >
          Contact us
        </Link>
      </nav>
    </Toolbar>
  );
};
