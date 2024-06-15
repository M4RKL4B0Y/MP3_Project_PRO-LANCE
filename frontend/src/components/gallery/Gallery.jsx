import React from "react";
import "./Gallery.css";

function Gallery() {
  return (
    <div>
      <div class="row">
        <div class="col-sm-6">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Current Project</h5>

              <p class="card-text">Forever Home Theater Install</p>

              <a href="#" class="btn btn-primary">
                Progress
              </a>
            </div>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Your Prolancer</h5>
              <p class="card-text">AccomaTech A/V</p>
              <a href="#" class="btn btn-primary">
                About Them
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
