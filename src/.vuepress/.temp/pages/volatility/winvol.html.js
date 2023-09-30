export const data = JSON.parse("{\"key\":\"v-c533b1de\",\"path\":\"/volatility/winvol.html\",\"title\":\"Windows命令参考\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Windows命令参考\",\"icon\":\"fab fa-windows\",\"order\":4,\"pageview\":true,\"description\":\"镜像识别 imageinfo 如果要获得内存的高级摘要，请使用 imageinfo 命令。大多数情况下，此命令用于识别操作系统、服务包和硬件体系结构（32 位或 64 位），但它还包含其他有用信息，例如 DTB 地址和内存镜像制作时间。 基础命令中的--profile=PROFILE，在 imageinfo 的输出中会告诉你所使用镜像的系统，因此需要你...\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://www.forensics-wiki.com/volatility/winvol.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"Forensics-Wiki\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Windows命令参考\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"镜像识别 imageinfo 如果要获得内存的高级摘要，请使用 imageinfo 命令。大多数情况下，此命令用于识别操作系统、服务包和硬件体系结构（32 位或 64 位），但它还包含其他有用信息，例如 DTB 地址和内存镜像制作时间。 基础命令中的--profile=PROFILE，在 imageinfo 的输出中会告诉你所使用镜像的系统，因此需要你...\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"og:updated_time\",\"content\":\"2023-07-27T13:13:50.000Z\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"Forensics-Wiki\"}],[\"meta\",{\"property\":\"article:modified_time\",\"content\":\"2023-07-27T13:13:50.000Z\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"Windows命令参考\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":\\\"2023-07-27T13:13:50.000Z\\\",\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"Forensics-Wiki\\\",\\\"url\\\":\\\"https://github.com/Forensics-wiki\\\"}]}\"]]},\"headers\":[{\"level\":2,\"title\":\"镜像识别\",\"slug\":\"镜像识别\",\"link\":\"#镜像识别\",\"children\":[{\"level\":3,\"title\":\"imageinfo\",\"slug\":\"imageinfo\",\"link\":\"#imageinfo\",\"children\":[]},{\"level\":3,\"title\":\"kdbgscan\",\"slug\":\"kdbgscan\",\"link\":\"#kdbgscan\",\"children\":[]},{\"level\":3,\"title\":\"kpcrscan\",\"slug\":\"kpcrscan\",\"link\":\"#kpcrscan\",\"children\":[]}]},{\"level\":2,\"title\":\"进程和dll\",\"slug\":\"进程和dll\",\"link\":\"#进程和dll\",\"children\":[{\"level\":3,\"title\":\"pslist\",\"slug\":\"pslist\",\"link\":\"#pslist\",\"children\":[]},{\"level\":3,\"title\":\"pstree\",\"slug\":\"pstree\",\"link\":\"#pstree\",\"children\":[]},{\"level\":3,\"title\":\"psscan\",\"slug\":\"psscan\",\"link\":\"#psscan\",\"children\":[]},{\"level\":3,\"title\":\"psdispscan\",\"slug\":\"psdispscan\",\"link\":\"#psdispscan\",\"children\":[]},{\"level\":3,\"title\":\"dlllist\",\"slug\":\"dlllist\",\"link\":\"#dlllist\",\"children\":[]},{\"level\":3,\"title\":\"dlldump\",\"slug\":\"dlldump\",\"link\":\"#dlldump\",\"children\":[]},{\"level\":3,\"title\":\"handles\",\"slug\":\"handles\",\"link\":\"#handles\",\"children\":[]},{\"level\":3,\"title\":\"getsids\",\"slug\":\"getsids\",\"link\":\"#getsids\",\"children\":[]},{\"level\":3,\"title\":\"cmdscan\",\"slug\":\"cmdscan\",\"link\":\"#cmdscan\",\"children\":[]},{\"level\":3,\"title\":\"consoles\",\"slug\":\"consoles\",\"link\":\"#consoles\",\"children\":[]},{\"level\":3,\"title\":\"privs\",\"slug\":\"privs\",\"link\":\"#privs\",\"children\":[]},{\"level\":3,\"title\":\"envars\",\"slug\":\"envars\",\"link\":\"#envars\",\"children\":[]},{\"level\":3,\"title\":\"verinfo\",\"slug\":\"verinfo\",\"link\":\"#verinfo\",\"children\":[]},{\"level\":3,\"title\":\"enumfunc\",\"slug\":\"enumfunc\",\"link\":\"#enumfunc\",\"children\":[]}]},{\"level\":2,\"title\":\"进程内存\",\"slug\":\"进程内存\",\"link\":\"#进程内存\",\"children\":[{\"level\":3,\"title\":\"memmap\",\"slug\":\"memmap\",\"link\":\"#memmap\",\"children\":[]},{\"level\":3,\"title\":\"memdump\",\"slug\":\"memdump\",\"link\":\"#memdump\",\"children\":[]},{\"level\":3,\"title\":\"procdump\",\"slug\":\"procdump\",\"link\":\"#procdump\",\"children\":[]},{\"level\":3,\"title\":\"varinfo\",\"slug\":\"varinfo\",\"link\":\"#varinfo\",\"children\":[]},{\"level\":3,\"title\":\"vadwalk\",\"slug\":\"vadwalk\",\"link\":\"#vadwalk\",\"children\":[]},{\"level\":3,\"title\":\"vadtree\",\"slug\":\"vadtree\",\"link\":\"#vadtree\",\"children\":[]},{\"level\":3,\"title\":\"vaddump\",\"slug\":\"vaddump\",\"link\":\"#vaddump\",\"children\":[]},{\"level\":3,\"title\":\"evtlogs\",\"slug\":\"evtlogs\",\"link\":\"#evtlogs\",\"children\":[]},{\"level\":3,\"title\":\"iehistory\",\"slug\":\"iehistory\",\"link\":\"#iehistory\",\"children\":[]}]},{\"level\":2,\"title\":\"核心内存和对象\",\"slug\":\"核心内存和对象\",\"link\":\"#核心内存和对象\",\"children\":[{\"level\":3,\"title\":\"modules\",\"slug\":\"modules\",\"link\":\"#modules\",\"children\":[]},{\"level\":3,\"title\":\"modscan\",\"slug\":\"modscan\",\"link\":\"#modscan\",\"children\":[]},{\"level\":3,\"title\":\"moddump\",\"slug\":\"moddump\",\"link\":\"#moddump\",\"children\":[]}]}],\"git\":{\"createdTime\":1690458684000,\"updatedTime\":1690463630000,\"contributors\":[{\"name\":\"ZhangZ\",\"email\":\"1762326648@qq.com\",\"commits\":2}]},\"readingTime\":{\"minutes\":28.38,\"words\":8513},\"filePathRelative\":\"volatility/winvol.md\",\"localizedDate\":\"2023年7月27日\",\"autoDesc\":true,\"excerpt\":\"\"}")
