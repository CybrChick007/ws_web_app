# ws_web_app

Bowling Alley dashboard -

Key Features:
  - Service states of each machine
  - Parts that need to be ordered
  - Most recent parts to arrive
  - Maintenance done the previous shift
  - Problems left over from previous shift

How to use:
  Dashboard - Set up in full screen setting on display screen. Ensure display screen is in plain view.

  Control Screen - To be used on a smartphone or other PDA internet capable device. (Though can be used on desktop if needed)
                   Tap box appropriate to the information you wish to update
                   Type in appropriate information
                   Information will then be transferred and viewable from display screen

Details of Design:

  The system is composed of two user interfaces. A dashboard view that includes read only text areas and a control panel with corresponding text areas that can be filled in. These will be connected with a web socket server.   

Implementations rationale, why?

  I wanted to use a web socket to minimise need for buttons or other controls in the aim to make the transfer of information very quick and require minimal effort as my intended user may be very busy and be doing multiple jobs at one time. This approach requires very little training or memory on the part of the user, which improves the usability of the system in a fast paced and hectic environment. I have also kept the style very minimal, while using bold lettering and slightly thicker borders to make components clearly visible at a glance for ease of use when moving around.
