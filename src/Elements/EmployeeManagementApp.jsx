import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import EmployeeTable from './EmployeeTable';
import { GetAllEmployees } from '../api';
import { ToastContainer } from 'react-toastify';
import { Button } from "@/components/ui/button"
import { Search, Filter, Calendar, MapPin, Users, Star, Clock } from 'lucide-react';

const EmployeeManagementApp = () => {
    const navigate = useNavigate();
    const [employees, setEmployees] = useState([]);
    const [activeCategory, setActiveCategory] = useState('All');

    const fetchEmployees = async (search = '') => {
        try {
            const data = await GetAllEmployees(search, 1, 1000);
            setEmployees(data.employees);
        } catch (err) {
            alert('Error', err);
        }
    };

    useEffect(() => {
        fetchEmployees();
    }, []);

    const handleSearch = (e) => {
        fetchEmployees(e.target.value);
    };

    const handleUpdateEmployee = (emp) => {
    navigate(`/dashboard/employee/edit/${emp._id}`, { state: { employee: emp } });
};

    // Mumbai-specific cultural categories
    const categories = [
        'All', 'Ganesh Festival', 'Heritage Walks', 'Coastal Events', 'Diwali', 'Street Food', 'Local Art'
    ];

    return (
        <div className="min-h-screen w-full bg-[url('https://via.placeholder.com/1920x1080')] bg-cover bg-fixed relative">
            {/* Mumbai Theme Overlay - Can be replaced with actual Mumbai backdrop image */}
            <div className="absolute inset-0 bg-gradient-to-b from-orange-600/70 via-purple-900/60 to-blue-900/80 backdrop-filter backdrop-blur-sm"></div>
            
            {/* Gateway of India Silhouette */}
            <div className="absolute bottom-0 left-0 right-0 h-48 overflow-hidden">
                <svg viewBox="0 0 1200 200" xmlns="http://www.w3.org/2000/svg" className="w-full">
                    <path d="M0,200 L0,150 L50,150 L75,100 L100,150 L125,120 L150,150 L175,130 L200,150 L250,150 L250,200 Z" fill="black" opacity="0.7" />
                    {/* Gateway of India */}
                    <path d="M400,200 L400,80 C400,70 420,70 420,80 L420,50 L480,50 L480,80 C480,70 500,70 500,80 L500,200 Z" fill="black" opacity="0.7" />
                    <path d="M430,50 L470,50 L470,30 C470,10 430,10 430,30 Z" fill="black" opacity="0.7" />
                    {/* Marine Drive Buildings */}
                    <path d="M600,200 L600,100 L620,100 L620,200 Z M630,200 L630,120 L650,120 L650,200 Z M660,200 L660,90 L680,90 L680,200 Z M690,200 L690,110 L710,110 L710,200 Z M720,200 L720,80 L740,80 L740,200 Z" fill="black" opacity="0.7" />
                    {/* Local train */}
                    <path d="M800,150 L800,120 L950,120 L950,150 L800,150 Z M810,120 L810,110 L830,110 L830,120 Z M840,120 L840,110 L860,110 L860,120 Z M870,120 L870,110 L890,110 L890,120 Z M900,120 L900,110 L920,110 L920,120 Z" fill="black" opacity="0.6" />
                    <path d="M790,150 L800,120 M950,120 L960,150 L790,150 Z" fill="black" opacity="0.6" />
                    {/* Bandra-Worli Sea Link */}
                    <path d="M1000,200 C1000,120 1100,120 1100,200" stroke="black" strokeWidth="5" fill="none" opacity="0.7" />
                    <path d="M1000,160 L1100,160" stroke="black" strokeWidth="2" fill="none" opacity="0.7" />
                    <path d="M1020,160 L1020,130 M1050,160 L1050,130 M1080,160 L1080,130" stroke="black" strokeWidth="3" fill="none" opacity="0.7" />
                </svg>
            </div>
            
            <div className="container mx-auto px-4 py-12 relative z-10">
                {/* Mumbai-inspired Header with Eventify title */}
                <div className="text-center mb-8">
                    <div className="inline-block">
                        <h1 className="text-5xl font-bold mb-2">
                            <span className="text-saffron text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-400">मुंबई</span>
                            <span className="text-white px-2">Eventify</span>
                        </h1>
                        <div className="text-white/80 text-sm">Connecting Mumbai's Heart Through Community Events</div>
                    </div>
                </div>
                
                <div className="backdrop-blur-md bg-white/10 rounded-2xl shadow-2xl p-8 border border-white/20">
                    {/* Mumbai landmarks carousel - placeholder */}
                    <div className="mb-8 overflow-hidden rounded-xl">
                        <div className="bg-gradient-to-r from-orange-500/30 to-purple-600/30 p-4 rounded-xl relative">
                            <div className="flex items-center justify-between mb-4">
                                <h2 className="text-xl font-bold text-white flex items-center">
                                    <Star className="h-5 w-5 mr-2 text-yellow-400" />
                                    Featured Mumbai Initiatives
                                </h2>
                                <Button className="bg-white/20 hover:bg-white/30 text-white text-sm rounded-lg px-3 py-1">
                                    View All
                                </Button>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {/* Event Card 1 - Dharavi Art Tour */}
                                <div className="bg-black/30 rounded-lg overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-300 cursor-pointer">
                                    <div className="h-32 bg-gradient-to-br from-blue-500/20 to-purple-600/20 flex items-center justify-center">
                                        <div className="w-full h-full flex items-center justify-center">
                                            <span className="text-white/70 text-sm">Dharavi Art</span>
                                        </div>
                                    </div>
                                    <div className="p-3">
                                        <div className="flex justify-between items-center mb-1">
                                            <div className="bg-orange-500/30 text-orange-300 text-xs px-2 py-1 rounded-full">Cultural</div>
                                            <div className="flex items-center text-white/60 text-xs">
                                                <Users className="h-3 w-3 mr-1" />
                                                <span>42 spots</span>
                                            </div>
                                        </div>
                                        <h3 className="text-white font-semibold text-sm mb-1">Dharavi Art Walk & Workshop</h3>
                                        <div className="flex items-center text-white/60 text-xs mb-1">
                                            <Calendar className="h-3 w-3 mr-1" />
                                            <span>Mar 18, 2025</span>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Event Card 2 - Mangrove Cleanup */}
                                <div className="bg-black/30 rounded-lg overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-300 cursor-pointer">
                                    <div className="h-32 bg-gradient-to-br from-green-500/20 to-blue-600/20 flex items-center justify-center">
                                        <div className="w-full h-full flex items-center justify-center">
                                            <span className="text-white/70 text-sm">Mangrove Conservation</span>
                                        </div>
                                    </div>
                                    <div className="p-3">
                                        <div className="flex justify-between items-center mb-1">
                                            <div className="bg-green-500/30 text-green-300 text-xs px-2 py-1 rounded-full">Environment</div>
                                            <div className="flex items-center text-white/60 text-xs">
                                                <Users className="h-3 w-3 mr-1" />
                                                <span>28 spots</span>
                                            </div>
                                        </div>
                                        <h3 className="text-white font-semibold text-sm mb-1">Mangrove Cleanup Drive</h3>
                                        <div className="flex items-center text-white/60 text-xs mb-1">
                                            <Calendar className="h-3 w-3 mr-1" />
                                            <span>Mar 22, 2025</span>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Event Card 3 - Dabbawalas Experience */}
                                <div className="bg-black/30 rounded-lg overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-300 cursor-pointer">
                                    <div className="h-32 bg-gradient-to-br from-amber-500/20 to-red-600/20 flex items-center justify-center">
                                        <div className="w-full h-full flex items-center justify-center">
                                            <span className="text-white/70 text-sm">Local Culture</span>
                                        </div>
                                    </div>
                                    <div className="p-3">
                                        <div className="flex justify-between items-center mb-1">
                                            <div className="bg-amber-500/30 text-amber-300 text-xs px-2 py-1 rounded-full">Heritage</div>
                                            <div className="flex items-center text-white/60 text-xs">
                                                <Users className="h-3 w-3 mr-1" />
                                                <span>15 spots</span>
                                            </div>
                                        </div>
                                        <h3 className="text-white font-semibold text-sm mb-1">Dabbawala Experience</h3>
                                        <div className="flex items-center text-white/60 text-xs mb-1">
                                            <Calendar className="h-3 w-3 mr-1" />
                                            <span>Mar 25, 2025</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
                        <Button 
                            className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-semibold px-6 py-2 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl border-none"
                            onClick={() => navigate('/dashboard/employee/add')}
                        >
                            <Calendar className="mr-2 h-5 w-5" />
                            Create New Mumbai Event
                        </Button>
                        
                        <div className="relative w-full md:w-1/2">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60 w-5 h-5" />
                            <input
                                onChange={handleSearch}
                                type="text"
                                placeholder="Search local events in Mumbai..."
                                className="w-full bg-black/30 text-white placeholder-white/60 border border-white/20 rounded-lg py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-orange-500/50 transition-all duration-300"
                            />
                        </div>
                    </div>

                    {/* Mumbai cultural categories */}
                    <div className="flex flex-wrap gap-2 mb-6 justify-center">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                                    activeCategory === category
                                        ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg'
                                        : 'bg-black/30 text-white/80 hover:bg-black/40'
                                }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* Mumbai cultural events highlight */}
                    <div className="mb-8 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-xl p-4 backdrop-blur-md border border-white/10">
                        <div className="flex flex-col md:flex-row items-center">
                            <div className="w-full md:w-1/3 mb-4 md:mb-0">
                                <div className="bg-gradient-to-br from-orange-300 to-red-500 p-1 rounded-lg">
                                    <div className="h-48 bg-black/40 rounded-lg flex items-center justify-center">
                                        <div className="text-center">
                                            <div className="text-orange-200 font-bold text-xl">गणेश चतुर्थी</div>
                                            <div className="text-white/70 text-sm">Ganesh Chaturthi</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:w-2/3 md:pl-6">
                                <div className="flex items-center mb-2">
                                    <div className="bg-orange-500/20 text-orange-300 text-xs px-2 py-1 rounded-full mr-2">Featured</div>
                                    <div className="bg-purple-500/20 text-purple-300 text-xs px-2 py-1 rounded-full">Cultural Festival</div>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-1">Eco-Friendly Ganpati Workshop</h3>
                                <p className="text-white/80 mb-3">Join us for a sustainable approach to Mumbai's biggest festival. Learn to create eco-friendly Ganesh idols using natural clay and organic colors.</p>
                                <div className="flex flex-wrap gap-3 mb-3">
                                    <div className="flex items-center text-white/70 text-xs">
                                        <Calendar className="h-4 w-4 mr-1" />
                                        <span>Sep 7, 2025</span>
                                    </div>
                                    <div className="flex items-center text-white/70 text-xs">
                                        <Clock className="h-4 w-4 mr-1" />
                                        <span>10:00 AM - 1:00 PM</span>
                                    </div>
                                    <div className="flex items-center text-white/70 text-xs">
                                        <MapPin className="h-4 w-4 mr-1" />
                                        <span>Juhu Beach, Mumbai</span>
                                    </div>
                                </div>
                                <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white text-sm px-4 py-2 rounded-lg">
                                    Register Now
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Employee/Event Table */}
                    <div className="bg-black/30 rounded-xl p-6 backdrop-blur-md border border-white/10">
                        <h2 className="text-xl font-bold text-white mb-6 flex items-center">
                            <Filter className="h-5 w-5 mr-2 text-orange-400" />
                            Mumbai Events Listing
                        </h2>
                        
                        <EmployeeTable 
                            employees={employees} 
                            onUpdateEmployee={handleUpdateEmployee} 
                        />
                    </div>
                </div>
                
                {/* Mumbai-themed Footer */}
                <footer className="mt-12 text-center text-white/70 text-sm relative z-10">
                    <div className="mb-4">
                        <div className="flex justify-center space-x-4">
                            <a href="#" className="hover:text-orange-400 transition-colors duration-300">About Us</a>
                            <a href="#" className="hover:text-orange-400 transition-colors duration-300">Contact</a>
                            <a href="#" className="hover:text-orange-400 transition-colors duration-300">Privacy Policy</a>
                            <a href="#" className="hover:text-orange-400 transition-colors duration-300">Terms of Service</a>
                        </div>
                    </div>
                    <p>© 2025 Mumbai Eventify - Celebrating the Spirit of Mumbai</p>
                </footer>
            </div>
            
            <ToastContainer />
        </div>
    );
};

export default EmployeeManagementApp;