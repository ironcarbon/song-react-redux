import React from "react";
import { connect } from "react-redux";

const songDetail = ({ mysong }) => {
  if (!mysong) {
    return <div>Select a song</div>;
  }
  return (
    <div>
      <h3>Details for:</h3>
      <p>
        Title: {mysong.title}
        <br />
        Duration: {mysong.duration}
      </p>
    </div>
  );
};

const mapStateToProps = state => {
  return { mysong: state.selectedSong };
};
export default connect(mapStateToProps)(songDetail);
