import { Add, Remove } from "@mui/icons-material";
import { Button, ButtonGroup } from "@mui/material";

export const ButtonGroupFilter = () => {

  const handleSortPrice = (key: string) => {

  }

  return (
    <ButtonGroup disableElevation size="medium" aria-label="small button group">
        <Button endIcon={<Remove />} onClick={() => handleSortPrice("<")}>Menor precio</Button>
        <Button endIcon={<Add />} onClick={() => handleSortPrice(">")}>Mayor precio</Button>
    </ButtonGroup>
  )
}
