/** @jsx jsx */
import React from "react"
import { jsx, Grid, Box } from "theme-ui"

const Feedback = () => {
  return (
    <div className="nice-box">
      <h3 className="nice-title">Feedbacks</h3>

      <Grid gap={4} columns={[1, null, 3]} sx={{ padding: "1.6rem" }}>
        <Box className="emoji-box">
          <span>🔥</span>
          <div>Great work bruh.</div>
          <small>Ali Taherian</small>
        </Box>
        <Box className="emoji-box">
          <span>🥰</span>
          <div>I love it, I used it in all of my projects</div>
          <small>Sarah Jalali</small>
        </Box>
        <Box className="emoji-box">
          <span>👍</span>
          <div>Just Great and Beautiful webapp</div>
          <small>Robbert Robinson</small>
        </Box>
        <Box className="emoji-box">
          <span>⚡</span>
          <div>I do my stuffs faster with iconbox</div>
          <small>Morteza Nasiri</small>
        </Box>

        <Box className="flex-center" sx={{ justifyContent: "flex-end " }}>
          <small>Send your feedback to:</small>
        </Box>
        <Box className="flex-center" sx={{ justifyContent: "flex-start " }}>
          <small>
            <a href="mailto:info@iconbox.space">info@iconbox.space</a>
          </small>
        </Box>
      </Grid>
    </div>
  )
}

export default Feedback
