import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { ECommercePage } from './pages/ecommerce.page';
import { OrdersPage } from './pages/orders.page';
import { EmployeesPage } from './pages/employees.page';
import { CustomersPage } from './pages/customers.page';
import { NavbarComponent, FooterComponent, SideBarComponent, ThemeSettingsComponent, LineChartComponent, PieComponent } from './components';
import { KanbanPage } from './pages/kanban.page';
import { EditorPage } from './pages/editor.page';
import { CalendarPage } from './pages/calendar.page';
import { ColorPickerPage } from './pages/colorPicker.page';
import { AreaComponent } from './components/area.component';
import { BarComponent } from './components/bar.component';

function App() {

    const activeMenu = true;

    return <div>
        <BrowserRouter>
            <div className='flex relative dark:bg-main-dark-bg' >
                <div className='fixed right-4 bottom-4' style={{ zIndex: '1000' }}>
                    <TooltipComponent position='TopCenter' content='Settings' />
                    <button
                        style={{ background: 'blue', borderRadius: 50, }}
                        type='button'
                        className='text-3xl p-3 hover:drop-shadow-xl hover: bg-light-grey text-white'>
                        <FiSettings />
                    </button>
                </div>
                {
                    activeMenu ? <div className='w-72 fixed sidebar 
                    dark:bg-secondary-dark-bg 
                    bg-white'
                    >
                        Sidebar
                    </div> :
                        <div className='w-0
                        dark:bg-secondary-dark-bg'>
                            Sidebar w-0
                        </div>
                }
                <div
                    className={
                        activeMenu
                            ? 'dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  '
                            : 'bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 '
                    }
                >
                    <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
                        <NavbarComponent />
                    </div>
                    <div>
                        <Routes>
                            <Route path="/" element={(<ECommercePage />)} />
                            <Route path="/ecommerce" element={(<ECommercePage />)} />

                            {/* pages  */}
                            <Route path="/orders" element={<OrdersPage />} />
                            <Route path="/employees" element={<EmployeesPage />} />
                            <Route path="/customers" element={<CustomersPage />} />

                            <Route path="/kanban" element={<KanbanPage />} />
                            <Route path="/editor" element={<EditorPage />} />
                            <Route path="/calendar" element={<CalendarPage />} />
                            <Route path="/color-picker" element={<ColorPickerPage />} />

                            <Route path="/line" element={<LineChartComponent />} />
                            <Route path="/area" element={<AreaComponent />} />
                            <Route path="/bar" element={<BarComponent />} />
                            <Route path="/pie" element={<PieComponent />} />
                        </Routes>
                    </div>

                </div>

            </div>
        </BrowserRouter>
    </div>;
}

export default App;
