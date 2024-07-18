import { setModules, addModule, editModule, updateModule, deleteModule } from "./reducer";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import * as client from "./client";
import ModulesControls from "./ModulesControls";
import { useState, useEffect } from "react";
import ModuleControlButtons from "./ModuleControlButtons";

export default function Modules() {
    const { cid } = useParams();
    const { modules } = useSelector((state: any) => state.modulesReducer);
    const [moduleName, setModuleName] = useState("");
    const dispatch = useDispatch();

    const saveModule = async (module: any) => {
        const status = await client.updateModule(module);
        dispatch(updateModule(module));
      };
    
    const removeModule = async (moduleId: string) => {
        await client.deleteModule(moduleId);
        dispatch(deleteModule(moduleId));
      };
    
    const createModule = async (module: any) => {
        const newModule = await client.createModule(cid as string, module);
        dispatch(addModule(newModule));
      };
    
    const fetchModules = async () => {
        const modules = await client.findModulesForCourse(cid as string);
        dispatch(setModules(modules));
      };
      useEffect(() => {
        fetchModules();
      }, []);
    
    return (
        <div id="wd-modules">
            <ModulesControls
                setModuleName={setModuleName}
                moduleName={moduleName}
                addModule={() => {
                    createModule({ name: moduleName, course: cid });
                    setModuleName("");
                }}
            />{" "}
            <br />
            <br />
            <br />
            <br />
            <ul id="wd-modules" className="list-group rounded-0">
      {modules
          .filter((module: any) => module.course === cid)
          .map((module: any) => (
              <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
                  <div className="wd-title p-3 ps-2 bg-secondary text-white">
                      {!module.editing ? (
                          module.name
                      ) : (
                          <input
                              className="form-control w-50 d-inline-block"
                              onChange={(e) => saveModule({ ...module, name: e.target.value })
                              }
                              onKeyDown={(e) => {
                                  if (e.key === "Enter") {
                                    saveModule({ ...module, editing: false });
                                  }
                              }}
                              value={module.name}
                          />
                      )}

                      <ModuleControlButtons
                          moduleId={module._id}
                          deleteModule={(moduleId) => {
                              removeModule(moduleId);
                          }}
                          editModule={(moduleId) => dispatch(editModule(moduleId))}
                      />
                  </div>
                  {module.lessons && (
                      <ul className="wd-lessons list-group rounded-0">
                          {module.lessons.map((lesson: any) => (
                              <li className="wd-lesson list-group-item p-3 ps-1">
                                  {lesson.name}
                              </li>
                          ))}
                      </ul>
                  )}
              </li>
          ))}
            </ul>
        </div>
    );
}
  
      
      
  