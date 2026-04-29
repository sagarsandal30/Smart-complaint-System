import React, { createContext, useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import { API_BASE_URL } from '../api/apiRoutes';

export const SocketContext = createContext();

export const SocketProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    // Commented out to prevent connection errors due to missing backend
    /*
    const newSocket = io(API_BASE_URL.replace('/api', ''), {
      autoConnect: false,
    });
    setSocket(newSocket);

    return () => newSocket.close();
    */
   
    // Mock socket for now
    const mockSocket = {
      on: (event, callback) => {
        console.log(`Mock Socket listening on: ${event}`);
      },
      emit: (event, data) => {
        console.log(`Mock Socket emitting: ${event}`, data);
      },
      off: (event) => {
        console.log(`Mock Socket off: ${event}`);
      }
    };
    setSocket(mockSocket);

  }, []);

  return (
    <SocketContext.Provider value={socket}>
      {children}
    </SocketContext.Provider>
  );
};
