//Booking tickets
//seats, date, time, tickets

const seats = {
  '2023-02-17': {
    '09:00': [
      { id: '1', type: '2D', foodAllowed: true },
      { id: '2', type: '2D', foodAllowed: false },
      { id: '3', type: '3D', foodAllowed: true },
    ],
    '12:00': [
      { id: '1', type: '2D', foodAllowed: false },
      { id: '2', type: '3D', foodAllowed: true },
      { id: '3', type: '3D', foodAllowed: true },
    ],
    '15:00': [
      { id: '1', type: '2D', foodAllowed: true },
      { id: '2', type: '2D', foodAllowed: true },
      { id: '3', type: '3D', foodAllowed: false },
    ],
  },
};

function checkTicketsAvailable(date, time, numTicket, seatType, foodAllowed) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const seatsAvailable = seats[date][time].filter(seat => {
        return seat.type === seatType && seat.foodAllowed === foodAllowed;
      }).length;

      if (seatsAvailable >= numTicket) {
        resolve(seatsAvailable);
      } else {
        reject(`No available seats for ${date} at ${time} with seat type ${seatType} and food policy ${foodAllowed}`);
      }
    }, 1000);
  });
}

async function bookTickets(date, time, numTickets, seatType, foodAllowed) {
  try {
    const availableSeats = await checkTicketsAvailable(date, time, numTickets, seatType, foodAllowed);
    console.log(`${date} booked ${numTickets} tickets for ${time} with seat type ${seatType} and food policy ${foodAllowed}`);
  } catch (error) {
    console.error(error);
  }
}

bookTickets('2023-02-17', '15:00', 2, '2D', true);

// Додати можливість вибирати конкретне місце, 3D або 2D, та чи можна в цей зал заходити з їжею.