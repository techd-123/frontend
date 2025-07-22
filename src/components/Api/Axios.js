const API_URL = 'http://localhost:8000' // Update with your Django server URL

export const registerUser = async (userData) => {
  const response = await fetch(`${API_URL}/register/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  })
  return await response.json()
}

export const verifyOTP = async (otpData) => {
  const response = await fetch(`${API_URL}/verify-otp/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(otpData),
  })
  return await response.json()
}

export const loginUser = async (credentials) => {
  const response = await fetch(`${API_URL}/login/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  })
  return await response.json()
}

export const logoutUser = async (refreshToken) => {
  const response = await fetch(`${API_URL}/logout/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ refresh: refreshToken }),
  })
  return await response.json()
}