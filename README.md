1. What is JSX, and why is it used?
JSX মানে হলো JavaScript XML।

কেন JSX ব্যবহার করা হয়?
সহজ লেখা: JSX দিয়ে আমরা HTML-এর মতো কোড লিখতে পারি, যা পড়া ও বোঝা অনেক সহজ হয়।

React এর সাথে কাজ করা সহজ করে: React কম্পোনেন্টে UI কেমন হবে, সেটা JSX দিয়ে সহজে লিখে ফেলা যায়।

ব্রাউজার সরাসরি বুঝতে পারে না: JSX কে Babel-এর মতো টুল ব্যবহার করে JavaScript-এ রূপান্তর করা হয়। যেমন:

2. What is the difference between State and Props?
React এ State আর Props দুটোই খুব গুরুত্বপূর্ণ জিনিস, কিন্তু এদের কাজ আলাদা। সেটা হল: State হলো কম্পোনেন্টের ভেতরের ডেটা, যেটা কম্পোনেন্ট নিজেই ম্যানেজ করে। এটা পরিবর্তনযোগ্য (mutable) setState বা useState দিয়ে আপডেট করা যায়। যখন state পরিবর্তন হয়, তখন সেই কম্পোনেন্ট আবার re-render হয়। আর Props হলো ডেটা পাস করার সিস্টেম (Parent → Child কম্পোনেন্টে পাঠানো যায়)। Props অপরিবর্তনীয় (immutable) Child কম্পোনেন্ট নিজে props পরিবর্তন করতে পারে না। Props শুধু পড়া (read-only) যায়, পরিবর্তন করা যায় না।

3. What is the useState hook, and how does it work?
useState হলো React-এর একটা Hook, যেটা functional component এর মধ্যে state (ডেটা) ম্যানেজ করতে ব্যবহার করা হয়। আগে class component-এ state ব্যবহার করা যেত, কিন্তু এখন functional component + useState দিয়েই state সহজে ম্যানেজ করা যায়।
UseState এর কাজ করার নিয়ম: 
useState সবসময় দুটি জিনিস রিটার্ন করে:
state ভেরিয়েবল (বর্তমান মান ধরে রাখে)
set function (state আপডেট করার জন্য)

4. How can you share state between components in React?
৩টা পদ্ধতিতে রিএক্ট এ এক কম্পোনেন্ট থেকে আরেক কম্পোনেন্টে state share করা যায়। সেগুলো হল:
Props দিয়ে state নিচে পাঠানো। Context API ব্যবহার করা। 
State Management লাইব্রেরি।

5. How is event handling done in React?
React-এ Event Handling করার নিয়ম হল:
camelCase নাম ব্যবহার করতে হয়
HTML এ আমরা লিখি → onclick=""
React এ লিখতে হয় → onClick={}
JSX এর মধ্যে ফাংশন দিতে হয়, স্ট্রিং হিসেবে লেখা যায় না, সরাসরি ফাংশন দিতে হয়।