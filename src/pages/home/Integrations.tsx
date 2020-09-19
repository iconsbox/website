/** @jsx jsx */
import React from "react"
import { jsx, Grid, Box } from "theme-ui"

const Integrations = () => {
  return (
    <Grid sx={{ mt: "6rem" }} gap={2} columns={[2, null, 4]}>
      <Box bg="primary">Box</Box>
      <Box bg="muted">Box</Box>
      <Box bg="primary">Box</Box>
      <Box bg="muted">Box</Box>
    </Grid>
  )
}

export default Integrations
