From phone on what to do for usb bugging
1. Make sure to turn on developer options
2. Turn on USB Debugging
3. Turn on Install via USB
4. Then you can just plug in your usb
<br>

Steps to making the application
1. Download android studio
2. Download Java SDK jdk-17
3. Make sure sdk is as what is wanted or required.
4. Then after finish downloading Android studio and Java SDK, Go to Environment Variables. and input as what is the path to your downloaded file for e.g
   On the top of environment variables  User Variables
ANDROID_SDK_ROOT      C:\Users\ASUS\AppData\Local\Android\Sdk
JAVA_HOME             C:\Program Files\Java\jdk-17

On the bottom of Environment Variables System variables
_JAVA_OPTIONS         -Xmx512M
JAVA_HOME             C:\Program Files\Java\jdk-17

Type in command prompt of the wanted file
5. ng build 
6. ionic capacitor add android
7. Go and open your visual studio code and make a new file called capacitor.config.json and enter this. But make sure the app id and appName is as to what you wanted it to be called
{
    "appId": "com.AlertDetectorApp",
    "appName": "AlertDetectorApp",
    "bundleWebRuntime": false,
    "npmClient": "npm",
    "webDir": "www",
    "cordova": {}
}
 type in command prompt
8. ionic capacitor copy android
9. ionic capacitor run android
Then that should be it.













Step 1: First of all you'd want to go into inspect element and choose iphone 14 or for better go for responsive and have it 643 x 1311

For All
Steps:
1. You can then choose either to click the navigations below to go to either Alert and notifications, Settings and Profile
2. You can click on the image profile on the top right to go to the profile page
3. You can click on the top left to open the menu to see a side menu that have a link to all different pages that is available
When you first enter the App you will be in the 

*Alert and Notifications page*
Steps:
1. You can scroll up and down to see all of the alert and notifications you have receive

*Settings Page*
Steps:
1. You can scroll up and down to see all of the features you can set to your preferences
2. You can set the sensitivity level by dragging the gray circle to your prefered sensitivity levels
3. You can set your quiet hours so that there will be no notifications during that time you've set (basically dnd or silent)
4. You can choose your notification methods and set it to how you'd want to be notified when an alert comes in by checking or unchecking the methods
5. You can choose your customized messages to be included in your Alert and notification card. 
   So for e.g if you uncheck Date, when a new alert comes in the alert and notification page, the alert will not have a Date in the card
6. You have an Alert message here, You can enter your alert message to what you want. So when a new alert comes in. This alert message you have input will be displayed.
7. There is a switch user which you can have multiple users and switch to what you want
8. Finally you have the language preferences which for now we will be locking it but in the future, It'll be updated to be able to handle certain languages.

*Profile page*
Steps:
1. You can click on the eye in the card next to password, Clicking this will reveal the password of your account.
2. Then lets go to the next page, we click on the menu button top left. Lets go to Alert's History

*Alert's History Page*
Steps:
1. Once again you can scroll up and down, You'll be able to see all of the history of all the alert's your account has receive.
2. Next up, click on the menu button top left and lets fo to the Community page

*Community page*
Steps:
1. As normal you can scroll up and down to see the most recent community post by the community
2. You can make your own post by clicking on the button "Post" top right.
3. Clicking on the button will bring you to a new page. A community post example page.
4. Here you can insert your image and comments for your post.
5. For example, lets click on the "Example" button below the card. This will bring you to another community post page.
6. Here is the post you have created and After confirming everything you can then click on the "Send" button.
7. Finally you can see your post being posted on the community page ofcourse at the top as it is the most recent post.
8. Ok our last page here, lets click on the menu button top left and go click on the about us.

*About Us Page*
Steps:
1. You can scroll up and down to read and see all the information about us. 
2. That's basically it we are basically finish there.





