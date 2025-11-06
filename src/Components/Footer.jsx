import React from "react";

export default function Footer(){
  const year = new Date().getFullYear();
  return (
    <footer className="bg-white border-t mt-6">
      <div className="container mx-auto px-4 py-4 text-sm text-gray-500 flex justify-between">
        <div>© {year} KnowYourMood — Made with ❤️</div>
        <div>Made by <a className="font-poppins" href="#">Udbhav Awasthi</a></div>
        <div>
          <a href="/terms" className="mr-4">Terms</a>
          <a href="/privacy">Privacy</a>
        </div>
      </div>
    </footer>
  );
}
