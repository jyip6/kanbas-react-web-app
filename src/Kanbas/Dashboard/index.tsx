import React from 'react';
export default function Dashboard() {
    return (
      <div id="wd-dashboard">
        <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
        <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
        <div id="wd-dashboard-courses">
          <div className="wd-dashboard-course">
            <img src="/images/reactjs.jpg" width={200} />
            <div>
              <a
                className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/1234/Home"
              >
                CS1234 React JS
              </a>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <a href="#/Kanbas/Courses/1234/Home"> Go </a>
            </div>
          </div>

          <div className="wd-dashboard-course">
            <img src="/images/reactjs.jpg" width={200} />
            <div>
              <a
                className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/1234/Home"
              >
                CS5010 Programming Design Paradigm
              </a>
              <p className="wd-dashboard-course-title">
                Programming Design Paradigm
              </p>
              <a href="#/Kanbas/Courses/1234/Home"> Go </a>
            </div>
          </div>

          <div className="wd-dashboard-course">
            <img src="/images/reactjs.jpg" width={200} />
            <div>
              <a
                className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/1234/Home"
              >
                CS 5100 Foundations of Artificial Intelligence
              </a>
              <p className="wd-dashboard-course-title">
                Foundations of Artificial Intelligence
              </p>
              <a href="#/Kanbas/Courses/1234/Home"> Go </a>
            </div>
          </div>

          <div className="wd-dashboard-course">
            <img src="/images/reactjs.jpg" width={200} />
            <div>
              <a
                className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/1234/Home"
              >
                CS 5200 Database Management Systems
              </a>
              <p className="wd-dashboard-course-title">
                Database Management Systems
              </p>
              <a href="#/Kanbas/Courses/1234/Home"> Go </a>
            </div>
          </div>

          <div className="wd-dashboard-course">
            <img src="/images/reactjs.jpg" width={200} />
            <div>
              <a
                className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/1234/Home"
              >
                CS 5310 Computer Graphics
              </a>
              <p className="wd-dashboard-course-title">
                Computer Graphics
              </p>
              <a href="#/Kanbas/Courses/1234/Home"> Go </a>
            </div>
          </div>

          <div className="wd-dashboard-course">
            <img src="/images/reactjs.jpg" width={200} />
            <div>
              <a
                className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/1234/Home"
              >
                CS 5340 Computer/Human Interaction
              </a>
              <p className="wd-dashboard-course-title">
                Computer/Human Interaction
              </p>
              <a href="#/Kanbas/Courses/1234/Home"> Go </a>
            </div>
          </div>

          <div className="wd-dashboard-course">
            <img src="/images/reactjs.jpg" width={200} />
            <div>
              <a
                className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/1234/Home"
              >
                CS 5400 Principles of Programming Language
              </a>
              <p className="wd-dashboard-course-title">
                Principles of Programming Language
              </p>
              <a href="#/Kanbas/Courses/1234/Home"> Go </a>
            </div>
          </div>
          
        </div>
      </div>
    );
  }