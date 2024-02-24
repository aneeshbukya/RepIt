import cv2

# Capture video from the webcam
cap = cv2.VideoCapture(0)

while True:
    # Read the frame
    _, frame = cap.read()
    
    # Display the frame
    cv2.imshow('Frame', frame)
    
    # Break the loop on pressing 'q'
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

# Release the capture and destroy all windows when done
cap.release()
cv2.destroyAllWindows()
