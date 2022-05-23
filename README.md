HOW ARE YOU?
-energy/mood tracking all that lets the user track there feelings by using a simple form. The app helps the user by providing 4 moods so that the user doesn't have to worry about the options. This app provides a text input that lets user give a description of what they are feeling.
ex:

^happy
what happened?

<!-- .... text here

.... -->

what went well today?

<!-- ...
..... -->

^need

<!--
 compassion
 rest
 clarity
 physical activity
connection
positivity
  -->

#Database  
**-**auth table
**-** feeling_tracker

- emoji -What happened? -What you are grateful for today? - what you need ^DROPDOWN -User\*id, -id, -date ------Date.now() or just display using SB
  \*\*\*\*\* ^DROPDOWN emoji ---- refer to giggle box to see how we did a dropdown on a form
  connect user to feelings table and RLS edit, delete.
  --stretch: how initial date and revised date

#Views
**\_**Home - renders feeling form
**\_** Profile -renders List of mood entries

#Components
**\_**Auth
-user can sign up and sign in
**\_** Feeling Entry -FORM
**\_**Select Emoji -Dropdown
**\_**select

#services
**\_** users
**\_** feelings

**\***STRETCH GOALS\*\*\*\*

-add music to drop down - reference assignment from module 1, card maker & rock paper scissors

-give option to accept ambient music as background or no music

-random quote of the day generator
find simple api
