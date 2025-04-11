import { NavLink } from "react-router-dom";
function Menu(){
    return(
        <>
            <div className="menu space-y-2 shadow shadow-gray-400 p-2"  style={{ boxShadow: "4px 0 6px -2px rgba(156, 163, 175, 0.5)" }}>
                <img src="src/assets/Image 1858.png" className="p-2" alt="" />
                <div className="flex flex-col gap-3">
                    <NavLink key={1} to="/Dashboard">
                        <button className="flex space-x-2">
                            <img src="src/assets/Pie chart.png" className="" alt="" />
                            <p>Dashboard</p>
                        </button>
                    </NavLink>
                    <NavLink key={2} to="/Project">
                        <button className="flex space-x-2">
                            <img src="src/assets/Folder.png" className="" alt="" />
                            <p>Project</p>
                        </button>
                    </NavLink>
                    <NavLink key={3} to="/Teams">
                        <button className="flex space-x-2">
                            <img src="src/assets/Groups.png" className="" alt="" />
                            <p>Teams</p>
                        </button>
                    </NavLink>
                    <NavLink key={4} to="/Analytics">
                        <button className="flex space-x-2">
                            <img src="src/assets/Pie chart.png" className="" alt="" />
                            <p>Analytics</p>
                        </button>
                    </NavLink>
                    <NavLink key={5} to="/Messages">
                        <button className="flex space-x-2">
                            <img src="src/assets/Chat.png" className="" alt="" />
                            <p>Messages</p>
                        </button>
                    </NavLink>
                    <NavLink key={6} to="/Intergrations">
                        <button className="flex space-x-2">
                        <img src="src/assets/Code.png" className="" alt="" />  
                            <p>Intergrations</p>
                        </button>
                    </NavLink>
                </div>
                <img src="src/assets/Group.png" className="" alt="" />
            </div>
        </>
    )
}
export default Menu;