import React from 'react';
export default function Dashboard() {
    return (
      <div id="wd-dashboard">
        <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
        <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
        <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">

          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card">
              <img src="/images/reactjs.jpg"/>
              <div className="card-body">
                <a
                  className="wd-dashboard-course-link"
                  href="#/Kanbas/Courses/1234/Home"
                  style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}
                >
                  CS 1234 React JS
                </a>
                <p className="wd-dashboard-course-title card-text">
                  Full Stack software developer
                </p>
                <a href="#/Kanbas/Courses/1234/Home" className="btn btn-primary"> Go </a>
               </div>
              </div>
            </div>

          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card">
              <img src="/images/reactjs.jpg"/>
              <div className="card-body">
                <a
                  className="wd-dashboard-course-link"
                  href="#/Kanbas/Courses/5010/Home"
                  style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}
                >
                  CS5010 Programming Design Paradigm
                </a>
                <p className="wd-dashboard-course-title card-text">
                  Programming Design Paradigm
                </p>
                <a href="#/Kanbas/Courses/5010/Home" className="btn btn-primary"> Go </a>
               </div>
              </div>
            </div>


          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card">
              <img src="/images/reactjs.jpg"/>
              <div className="card-body">
                <a
                  className="wd-dashboard-course-link"
                  href="#/Kanbas/Courses/5200/Home"
                  style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}
                >
                  CS 5200 Database Management Systems
                </a>
                <p className="wd-dashboard-course-title card-text">
                  Database Management Systems
                </p>
                <a href="#/Kanbas/Courses/5200/Home" className="btn btn-primary"> Go </a>
               </div>
              </div>
            </div>


          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card">
              <img src="/images/reactjs.jpg"/>
              <div className="card-body">
                <a
                  className="wd-dashboard-course-link"
                  href="#/Kanbas/Courses/5310/Home"
                  style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}
                >
                  CS 5310 Computer Graphics
                </a>
                <p className="wd-dashboard-course-title card-text">
                Computer Graphics
                </p>
                <a href="#/Kanbas/Courses/5310/Home" className="btn btn-primary"> Go </a>
               </div>
              </div>
            </div>


          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card">
              <img src="/images/reactjs.jpg"/>
              <div className="card-body">
                <a
                  className="wd-dashboard-course-link"
                  href="#/Kanbas/Courses/5340/Home"
                  style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}
                >
                  CS 5340 Computer/Human Interaction
                </a>
                <p className="wd-dashboard-course-title card-text">
                  Computer/Human Interaction
                </p>
                <a href="#/Kanbas/Courses/5340/Home" className="btn btn-primary"> Go </a>
               </div>
              </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card">
              <img src="/images/reactjs.jpg"/>
              <div className="card-body">
                <a
                  className="wd-dashboard-course-link"
                  href="#/Kanbas/Courses/5400/Home"
                  style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}
                >
                  CS 5400 Principles of Programming Language
                </a>
                <p className="wd-dashboard-course-title card-text">
                Principles of Programming Language
                </p>
                <a href="#/Kanbas/Courses/5400/Home" className="btn btn-primary"> Go </a>
               </div>
              </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card">
              <img src="/images/reactjs.jpg"/>
              <div className="card-body">
                <a
                  className="wd-dashboard-course-link"
                  href="#/Kanbas/Courses/5800/Home"
                  style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}
                >
                  CS 5800 Algorithms
                </a>
                <p className="wd-dashboard-course-title card-text">
                Algorithms
                </p>
                <a href="#/Kanbas/Courses/5800/Home" className="btn btn-primary"> Go </a>
               </div>
              </div>
          </div>
         
        </div>
      </div>
    </div>
    );
  }