import { FaGithub, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16 border-t border-[#171717]">
      <div className="max-w-[1180px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* 왼쪽 영역 - Team Info & Social */}
          <div className="space-y-6">
            <h3 className="font-bold text-xl mb-6 tracking-wide">@YOGIITSU</h3>
            <div className="flex flex-col gap-3">
              <a
                href="https://github.com/YOGIITSU-App"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#8d8d93] hover:text-white transition-colors text-sm"
              >
                <FaGithub className="text-base" />
                <span>Github↗</span>
              </a>
              <a
                href="https://www.youtube.com/watch?v=uGwNB6_aN9s"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#8d8d93] hover:text-white transition-colors text-sm"
              >
                <FaYoutube className="text-base" />
                <span>Youtube↗</span>
              </a>

              <a
                href="https://www.instagram.com/yogiitsu"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#8d8d93] hover:text-white transition-colors text-sm"
              >
                <FaInstagram className="text-base" />
                <span>Instagram↗</span>
              </a>
            </div>
          </div>

          {/* 가운데 영역 - Team Info */}
          <div className="space-y-4">
            <h4 className="text-white font-medium mb-6 text-sm">Team Info</h4>
            <div className="space-y-3">
              <p className="text-[#8d8d93] text-sm">
                Application Development: Team YOGIITSU
              </p>
              <p className="text-[#8d8d93] text-sm">
                Website Development: Somi Park
              </p>
            </div>
          </div>

          {/* 오른쪽 영역 - Links */}
          <div className="space-y-4">
            <h4 className="text-white font-medium mb-6 text-sm">Links</h4>
            <div className="space-y-3">
              <a
                href="https://sites.google.com/view/yogiitsu"
                className="block text-[#8d8d93] hover:text-white transition-colors text-sm"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>

        {/* 하단 Copyright */}
        <div className="pt-8 border-t border-[#2d2d2d] text-center">
          <p className="text-[#8d8d93] text-xs">
            © 2025 YOGIITSU. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
