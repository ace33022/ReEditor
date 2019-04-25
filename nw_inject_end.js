/**
 *
 * @description ReEditor
 *
 * @version 2018/09/19 初始版本。
 *
 * @author ace
 *
 * @see {@link http://requirejs.org/|RequireJS}
 *
 * @see {@link https://jquery.com/|jQuery}
 *
 * @see {@link https://getbootstrap.com/|Bootstrap · The most popular HTML, CSS, and JS library in the world.}
 *
 * @see {@link http://underscorejs.org/|Underscore.js}
 * @see {@link https://github.com/jashkenas/underscore|jashkenas/underscore: JavaScript's utility _ belt}
 *
 * @see {@link http://backbonejs.org/|Backbone.js}
 * @see {@link https://github.com/jashkenas/backbone|jashkenas/backbone: Give your JS App some Backbone with Models, Views, Collections, and Events}
 * @see {@link https://github.com/jashkenas/backbone/wiki/Tutorials%2C-blog-posts-and-example-sites|Tutorials, blog posts and example sites · jashkenas/backbone Wiki}
 *
 * @see {@link data:text/html;base64,PGh0bWw+CiAgPGhlYWQ+CiAgICA8dGl0bGU+VVJMIFdlYnNpdGUgTWFrZXI8L3RpdGxlPgogICAgPCEtLQogICAgICBDbGljayB0aGUgYnV0dG9uIG92ZXIgdGhlcmUgPT0+CiAgICAgIHRvIG9wZW4gYSBuZXcgdGFiIHdpdGggdGhlCiAgICAgIGNvZGUgY3VycmVudGx5IGluIHRoaXMgZWRpdG9yLgogICAgICAgIEBhdXRob3IgaHR0cDovL2dpdGh1Yi5jb20vanBpbGxvcmEKICAgIC0tPgogIDwvaGVhZD4KICA8Ym9keSBzdHlsZT0iZm9udC1mYW1pbHk6IENvdXJpZXI7Ij4KCiAgICA8YSBpZD0ibG4iIHRhcmdldD0iX2JsYW5rIiBzdHlsZT0iYmFja2dyb3VuZDogd2hpdGVzbW9rZTsgcG9zaXRpb246IGFic29sdXRlOwogICAgICB0b3A6IDA7IHJpZ2h0OiAwOyB6LWluZGV4OiAyOyBwYWRkaW5nOiAxMHB4OyBtYXJnaW46IDEwcHg7IGJvcmRlci1yYWRpdXM6IDVweDsKICAgICAgY29sb3I6IGJsYWNrOyB0ZXh0LWRlY29yYXRpb246IG5vbmU7Ij5PcGVuIHRoaXMgcGFnZTwvYT4KCiAgICA8ZGl2IGlkPSJ0YSIgc3R5bGU9IiBmb250LXNpemU6IDE2cHg7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgdG9wOiAwOyBsZWZ0OiAwOwogICAgICB3aWR0aDogMTAwJTsgaGVpZ2h0OiAxMDAlOyB6LWluZGV4OiAxOyI+PC9kaXY+CgogICAgPHNjcmlwdCBzcmM9Imh0dHA6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvYWNlLzEuMS4wMS9hY2UuanMiCiAgICAgICAgICAgIHR5cGU9InRleHQvamF2YXNjcmlwdCIgY2hhcnNldD0idXRmLTgiPjwvc2NyaXB0PgoKICAgIDxzY3JpcHQ+CiAgICAgIHZhciBsbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsbicpOwogICAgICB2YXIgdXBkYXRlID0gZnVuY3Rpb24oKSB7CiAgICAgICAgbG4uaHJlZiA9ICdkYXRhOnRleHQvaHRtbDtiYXNlNjQsJyArIGJ0b2EoZWRpdG9yLnNlc3Npb24uZ2V0VmFsdWUoKSk7CiAgICAgIH0KICAgICAgdmFyIGVkaXRvciA9IGFjZS5lZGl0KCJ0YSIpOwogICAgICBlZGl0b3Iuc2V0VGhlbWUoImFjZS90aGVtZS9tb25va2FpIik7CiAgICAgIGVkaXRvci5nZXRTZXNzaW9uKCkuc2V0TW9kZSgiYWNlL21vZGUvaHRtbCIpOwogICAgICBlZGl0b3Iuc2Vzc2lvbi5zZXRUYWJTaXplKDIpOwogICAgICBlZGl0b3Iuc2Vzc2lvbi5zZXRVc2VTb2Z0VGFicyh0cnVlKTsKICAgICAgZWRpdG9yLnNldFNob3dQcmludE1hcmdpbihmYWxzZSk7CiAgICAgIGVkaXRvci5vbignY2hhbmdlJyx1cGRhdGUpOwogICAgICBlZGl0b3Iuc2Vzc2lvbi5zZXRWYWx1ZSgKICAgICAgICBhdG9iKC9iYXNlNjQsKC4qKSQvLnRlc3QobG9jYXRpb24uaHJlZikgPyBSZWdFeHAuJDEgOiAnJykKICAgICAgKTsKICAgICAgdXBkYXRlKCk7CiAgICA8L3NjcmlwdD4KICA8L2JvZHk+CjwvaHRtbD4K|URL Website Maker}
 *
 * @see {@link https://codemirror.net/2/doc/realworld.html|CodeMirror: Real-world uses}
 * @see {@link http://prose.io/|Prose · A Content Editor for GitHub}
 *
 * @see {@link https://codemirror.net/|CodeMirror}
 * @see {@link https://github.com/codemirror/CodeMirror/|codemirror/CodeMirror: In-browser code editor}
 * @see {@link https://www.npmjs.com/package/codemirror|codemirror - npm}
 * @see {@link https://codemirror.net/doc/manual.html|CodeMirror: User Manual}
 * @see {@link https://codemirror.net/mode/|CodeMirror: Language Modes}
 * @see {@link https://codemirror.net/demo/theme.html|CodeMirror: Theme Demo}
 * @see {@link https://codemirror.net/2/demo/theme.html|CodeMirror: Theme Demo}
 * @see {@link https://cdnjs.com/libraries/codemirror|codemirror - cdnjs.com - The best FOSS CDN for web related libraries to speed up your websites!}
 * @see {@link https://www.jsdelivr.com/package/npm/codemirror|codemirror CDN by jsDelivr - A CDN for npm and GitHub}
 * @see {@link https://codepen.io/hollyos/pen/WOoaWm|codemirror CDN Reference}
 *
 * @see {@link https://github.com/codemirror/CodeMirror/issues/3234|Unable to load modes · Issue #3234 · codemirror/CodeMirror}
 *
 * @see {@link https://gist.github.com/marijnh/4202141|CodeMirror almost full height}
 * @see {@link https://www.lifewire.com/set-height-html-element-100-percent-3467075|How to Set the Height of an HTML Element to 100%}
 * @see {@link https://stackoverflow.com/questions/4628544/how-to-detect-when-cancel-is-clicked-on-file-input|html - How to detect when cancel is clicked on file input? - Stack Overflow}
 *
 * @see {@link https://developer.mozilla.org/zh-TW/docs/Web/API/File/Using_files_from_web_applications|在網頁應用程式中使用本地檔案 - Web APIs | MDN}
 * @see {@link http://trishulgoel.com/handle-cancel-click-on-file-input/|Handle Cancel Click on File Input | Trishul Goel}
 *
 * @see {@link https://developer.mozilla.org/zh-TW/docs/Web/API/FileReader|FileReader - Web APIs | MDN}
 * @see {@link https://developer.mozilla.org/zh-TW/docs/Web/API/File|File - Web APIs | MDN}
 * @see {@link https://developer.mozilla.org/zh-TW/docs/Web/API/Blob|Blob - Web APIs | MDN}
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/TextDecoder|TextDecoder - Web APIs | MDN}
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/TextDecoder/encoding|TextDecoder.encoding - Web APIs | MDN}
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/TextDecoder/decode|TextDecoder.decode() - Web APIs | MDN}
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays|JavaScript typed arrays - JavaScript | MDN}
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray|TypedArray - JavaScript | MDN}
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer|ArrayBuffer - JavaScript | MDN}
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Int8Array|Int8Array - JavaScript | MDN}
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array|Uint8Array - JavaScript | MDN}
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView|DataView - JavaScript | MDN}
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String|String - JavaScript | MDN}
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt|String.prototype.charCodeAt() - JavaScript | MDN}
 *
 * @see {@link https://developer.mozilla.org/en-US/Add-ons/Code_snippets/StringView|StringView - Mozilla | MDN}
 *
 * @see {@link https://www.w3schools.com/jsref/met_win_atob.asp|Window atob() Method}
 * @see {@link https://www.w3schools.com/jsref/met_win_btoa.asp|Window btoa() Method}
 *
 * @see {@link https://eligrey.com/blog/saving-generated-files-on-the-client-side/|Saving generated files on the client-side — Eli Grey}
 * @see {@link https://github.com/eligrey/FileSaver.js|eligrey/FileSaver.js: An HTML5 saveAs() FileSaver implementation}
 * @see {@link https://eligrey.com/demos/FileSaver.js/|FileSaver.js demo}
 * @see {@link https://github.com/eligrey/Blob.js|eligrey/Blob.js: An HTML5 Blob implementation}
 * @see {@link https://github.com/bjornstar/blob-polyfill|bjornstar/blob-polyfill: An HTML5 Blob implementation}
 *
 * @see {@link https://thiscouldbebetter.wordpress.com/2012/12/18/loading-editing-and-saving-a-text-file-in-html5-using-javascrip/|Loading, Editing, and Saving a Text File in HTML5 Using Javascript | This Could Be Better}
 * @see {@link http://blog.chunnorris.cc/2015/03/javascript-ansi-utf-8.html|用 javascript 讀入、輸出 ANSI 與 UTF-8 編碼的檔案 - Chun Norris Facts}
 *
 * @see {@link https://encoding.spec.whatwg.org/|Encoding Standard}
 * @see {@link https://github.com/whatwg/encoding|whatwg/encoding: Encoding Standard}
 *
 * @see {@link https://github.com/inexorabletash/text-encoding|inexorabletash/text-encoding: Polyfill for the Encoding Living Standard's API}
 * @see {@link https://github.com/pmq/text-encoding|pmq/text-encoding: Polyfill for the Encoding Living Standard's API}
 * @see {@link https://github.com/b4stien/js-csv-encoding|b4stien/js-csv-encoding: Showcase of how to create valid CSV client-side}
 *
 * @see {@link https://zh.wikipedia.org/wiki/%E5%A4%A7%E4%BA%94%E7%A2%BC|大五碼 - 維基百科，自由的百科全書}
 * @see {@link https://zh.wikipedia.org/wiki/UTF-8|UTF-8 - 維基百科，自由的百科全書}
 * @see {@link http://terryhung.pixnet.net/blog/post/24828008-big5%E3%80%81unicode-%E4%B8%AD%E6%96%87%E5%AD%97%E9%9B%86%E7%B8%BD%E6%95%B4%E7%90%86|Big5、Unicode 中文字集總整理 @ 泰瑞的世界 :: 痞客邦 ::}
 *
 * @see {@link https://bugzilla.mozilla.org/show_bug.cgi?id=310299|310299 - Big5 Unicode Mapping Table Update}
 * @see {@link http://moztw.org/docs/big5/table/cp950-b2u.txt|moztw.org/docs/big5/table/cp950-b2u.txt}
 * @see {@link http://moztw.org/docs/big5/table/cp950-u2b.txt|moztw.org/docs/big5/table/cp950-u2b.txt}
 * @see {@link http://ftp.unicode.org/Public/MAPPINGS/VENDORS/MICSFT/WINDOWS/CP950.TXT|http://ftp.unicode.org/Public/MAPPINGS/VENDORS/MICSFT/WINDOWS/CP950.TXT}
 * @see {@link https://www.csie.ntu.edu.tw/~r92030/project/big5/|Big5-2003}
 * @see {@link https://www.csie.ntu.edu.tw/~r92030/project/big5/big5uni.txt|https://www.csie.ntu.edu.tw/~r92030/project/big5/big5uni.txt}
 * @see {@link http://ash.jp/code/cn/big5tbl.htm|Big5 (Traditional Chinese) character code table}
 * 
 * @see {@link https://en.wikipedia.org/wiki/Data_structure_alignment|Data structure alignment - Wikipedia}
 *
 * @see {@link https://developers.google.com/web/updates/2014/08/Easier-ArrayBuffer-String-conversion-with-the-Encoding-API|Easier ArrayBuffer to String conversion with the Encoding API  |  Web  |  Google Developers}
 * @see {@link https://www.javascripture.com/Uint8Array|Uint8Array JavaScript API}
 * @see {@link https://www.puritys.me/docs-blog/article-294-Javascript-%E8%99%95%E7%90%86-Binary-%E8%B3%87%E6%96%99---ArrayBuffer.html|Javascript 處理 Binary 資料 - ArrayBuffer}
 *
 * @see {@link https://blog.techbridge.cc/2017/09/24/binary-data-manipulations-in-javascript/|使用 JavaScript 處理二進位資料 | TechBridge 技術共筆部落格}
 *
 * @see {@link https://ithelp.ithome.com.tw/questions/10055026|javascript 轉碼問題 utf-8 轉成 big5 - iT 邦幫忙::一起幫忙解決難題，拯救 IT 人的一天}
 * @see {@link https://blog.longwin.com.tw/2013/12/unicode-utf8-char-range-table-2013/|Unicode / UTF-8 字元編碼區間表 - 2013 | Tsung's Blog}
 * @see {@link http://www.programmer-club.com.tw/ShowSameTitleN/general/4309.html|[心得] 各種語系的unicode對應以及local編碼方式 / 一般討論區 / 程式設計俱樂部}
 * @see {@link https://github.com/johnyluyte/javascript-I-O-with-ANSI-UTF-8|johnyluyte/javascript-I-O-with-ANSI-UTF-8: javascript I/O with ANSI/UTF-8}
 * @see {@link http://blog.blackbing.net/post/2011/08/17/javascript-utf-8-stroke-sorting-solution/|javascript UTF-8 繁體中文筆劃排序 解決之道 | Blackbing Playground}
 *
 * @see {@link https://github.com/eligrey/FileSaver.js/issues/28|Saving CSV with unique chars using in a different encoding other than UTF-8 · Issue #28 · eligrey/FileSaver.js}
 * @see {@link https://stackoverflow.com/questions/12448595/get-set-file-encoding-with-javascripts-filereader/|Get/set file encoding with javascript's FileReader - Stack Overflow}
 *
 * @comment Big5碼是一套雙位元組字元集，使用了雙八碼儲存方法，以兩個位元組來安放一個字。第一個位元組稱為「高位位元組」，第二個位元組稱為「低位位元組」。「高位位元組」使用了0x81-0xFE，「低位位元組」使用了0x40-0x7E及0xA1-0xFE。
 * @comment Big5碼普遍被認為包含 13,053 個字（5,401 個常用字 + 7,652 個次常用字）
 * @comment Big5又稱為大五碼或五大碼，是使用繁體中文（正體中文）社群中最常用的電腦漢字字元集標準，共收錄13,060個漢字[1]。普遍認為大五碼包含13,053字，但在計算0xA259-0xA261的九個度量衡單位用字（兙兛兞兝兡兣嗧瓩糎），再減去重收了兩次的「兀」（0xC94A）和「嗀」（0xDDFC）後，應為13,060字。
 *
 * @todo 2019/04/25 ace Hotkey
 *
 */

Configurations.loadJS(Configurations.requirejsFile, function() {

	requirejs.config(tw.ace33022.RequireJSConfig);
	
	requirejs(["tw.ace33022.util.browser.ReUtils"], function(ReUtils) {

		ReUtils.beforeInitEnv(function() {
	
			requirejs(["tw.ace33022.util.browser.FormUtils", "tw.ace33022.backbone.view.AncestorForm00", "codemirror", "codemirror/mode/textile/textile"], function(FormUtils, View, CodeMirror) {
			
				var localPath = location.pathname.substring(0, location.pathname.lastIndexOf("/") + 1);
				
				var codeMirrorId = 'codeMirror' + Math.random().toString(36).substr(2, 6);
		
				var codeMirrorConfig = {
			
					"mode": "text/x-textile",
					// "mode" : "text/javascript",
					"tabSize": 2,
					"theme": "blackboard",
					"lineNumbers": true
				};
				var codeMirror;
				
				var view = new View({

					"brandName": "ReEditor"
				});
				
				jQuery(window).on('focus', function(event) {
				
					if ((jQuery('.modal-open').length === 0) && (jQuery('.modal-backdrop').length === 0)) {
					
						if (typeof codeMirror !== 'undefined') codeMirror.focus();
					}
				});
				
				jQuery(window).on('blur', function(event) {});
				
				/**
				 *
				 * @see {@link http://stackoverflow.com/questions/20853142/trying-to-detect-browser-close-event|javascript - Trying to detect browser close event - Stack Overflow}
				 *
				 */
				window.addEventListener('beforeunload', function(event) {
				
					var confirmationMessage = '是否放棄已修改的資料？';
				
					if (document.title.startsWith('*')) event.returnValue = confirmationMessage;
					
					return confirmationMessage;
				});
				
				/**
				 *
				 * @comment 只有在轉換瀏覽器的Tab時才有作用，轉換不同程式時則無用！？
				 *
				 */
				document.addEventListener('visibilitychange', 
					
					function() {
					
						// if (!document.hidden) initInsertStatus(false);
						// console.log(document.visibilityState);
					},
					false
				);
				
				view.addDropdownMenu({
				
					"menuCaption": "檔案",
					"items": [
						{
							"caption": "New...",
							"click": function(event) {
							
								if (codeMirror.getValue() != '') {
								
									FormUtils.showConfirmMessage(
									
										'目前資料將被清除‧‧‧',
										function() {
										
											if (('localStorage' in window) && (window['localStorage'] !== null)) localStorage.removeItem(localPath);
										
											codeMirror.setValue('');
										}
									);
								}
							}
						},
						{
							"caption": "Load...",
							"click": function(event) {
							
								requirejs(["bootstrap-fileinput"], function() {
								
									var file = null;
									
									var modalHeader, modalBody, modalFooter;
									var baseModal;
									
									var btnConfirmId = 'btnConfirm' + Math.random().toString(36).substr(2, 6);
									
									tag = '<div class="modal-header">'
											+ '  <h4 class="modal-title">選取檔案</h4>'
											+ '</div>';
									modalHeader = jQuery(tag);

									tag = '<div class="modal-body">'
											+ '  <form>'
											+ '    <label>檔案編碼格式：</label>'
											+ '    <label class="radio-inline"><input type="radio" name="charType" value="utf8" checked />UTF-8</label>'
											+ '    <label class="radio-inline"><input type="radio" name="charType" value="big5" />BIG-5</label>'
											+	'    <input type="file" class="file" data-show-preview="false" data-show-upload="false" data-show-remove="false" />'
											+ '  </form>'
											+	'</div>';
									modalBody = jQuery(tag);

									tag = '<div class="modal-footer">'
											+ '  <input type="button" id="' + btnConfirmId + '" class="btn btn-primary" value="確認" disabled />'
											+ '  <input type="button" class="btn btn-primary" data-dismiss="modal" value="取消" />'
											+ '</div>';
									modalFooter = jQuery(tag);

									baseModal = FormUtils.addBaseModal(modalHeader, modalBody, modalFooter);

									jQuery('#' + btnConfirmId).on('click', function(event) {

										file = baseModal.find('input[type="file"]').get(0).files[0];

										baseModal.modal('hide');
									});

									baseModal.on('shown.bs.modal', function() {

										jQuery(this).find('input[type="file"]').fileinput().focus();
									});

									baseModal.on('hidden.bs.modal', function() {

										var reader = new FileReader();
										
										if (file !== null) {
										
											try {
											
												reader.onload = function(event) { 
												
													codeMirror.setValue(event.target.result);
													
													baseModal.remove();
												};

												reader.readAsText(file, jQuery('input[name="charType"]:checked').val());
											}
											catch (error) {
											
												FormUtils.showMessage('讀取檔案過程有誤！錯誤訊息：' + error.message);
											}
											finally {
											
											}
										}
									});

									baseModal.find('input[type="file"]').on('fileclear', function(event) {});

									baseModal.find('input[type="file"]').on('filecleared', function(event) {});

									baseModal.find('input[type="file"]').on('change', function(event) {
									
										jQuery('#' + btnConfirmId).attr('disabled', false);
									});

									baseModal.modal('show');
								});
							}
						},
						{
							"caption": "Save...",
							"click": function(event) {
							
								var modalHeader, modalBody, modalFooter;
								var baseModal;
								
								var inpFilenameId = 'inpFilename' + Math.random().toString(36).substr(2, 6);
								var btnConfirmId = 'btnConfirm' + Math.random().toString(36).substr(2, 6);
								
								var clickConfirm = false;
								var filename = '';
								
								tag = '<div class="modal-header">'
										+ '  <h4 class="modal-title">檔案名稱</h4>'
										+ '</div>';
								modalHeader = jQuery(tag);

								tag = '<div class="modal-body">'
										+ '  <form>'
										+ '    <label>檔案編碼格式：</label>'
										+ '    <label class="radio-inline"><input type="radio" name="charType" value="utf8" checked />UTF-8(檔首無BOM)</label>'
										+ '    <label class="radio-inline"><input type="radio" name="charType" value="utf8-bom" />UTF-8</label>'
										+ '    <label class="radio-inline"><input type="radio" name="charType" value="big5" />BIG-5</label>'
										+	'    <input type="text" id="' + inpFilenameId + '"class="form-control" value="" />'
										+ '  </form>'
										+	'</div>';
								modalBody = jQuery(tag);

								tag = '<div class="modal-footer">'
										+ '  <input type="button" id="' + btnConfirmId + '" class="btn btn-primary" value="確認" />'
										+ '  <input type="button" class="btn btn-primary" data-dismiss="modal" value="取消" />'
										+ '</div>';
								modalFooter = jQuery(tag);

								baseModal = FormUtils.addBaseModal(modalHeader, modalBody, modalFooter);
								
								modalBody.find('form').on('submit', function(event) { event.preventDefault(); });
								
								jQuery('#' + btnConfirmId).on('click', function(event) {
								
									clickConfirm = true;
									filename = jQuery('#' + inpFilenameId).val();
									
									baseModal.modal('hide');
								});

								baseModal.on('shown.bs.modal', function(event) {

									jQuery(this).find('input[type="text"]').focus().select();
								});

								baseModal.on('hidden.bs.modal', function(event) {
								
									if (clickConfirm === true) {
									
										if (filename === '') {
										
											FormUtils.showMessage('檔案名稱不可空白！', function() { 
											
												clickConfirm = false;
												
												baseModal.modal('show'); 
											});
										}
										else {
										
											requirejs(["tw.ace33022.util.StringUtils", "blob", "filesaver"], function(StringUtils) {
											
												try {
												
													var content = codeMirror.getValue();
													
													var index;
													
													var code, charCode, hexHCode, hexLCode;
													
													var dataBuffer = new ArrayBuffer(content.length * 2);
													var dataView = new Uint8Array(dataBuffer);
													var viewIndex = 0;
													
													var outputBuffer;
													var outputView;
													
													var blob;
													
													if (jQuery('input[name="charType"]:checked').val() === 'big5') {
													
														for (index = 0; index <= content.length - 1; index++) {
														
															charCode = content.charCodeAt(index);

															if (charCode > 0xFF) {
															
																code = (StringUtils.encodeUTF8ToBig5(encodeURI(content[index]))).replace(/%/g, '');
																
																hexHCode = code.substr(0, 2);
																
																dataView[viewIndex++] = parseInt(hexHCode, 16);
																
																// 「高位字節」使用了0x81-0xFE，「低位字節」使用了0x40-0x7E，及0xA1-0xFE。
																if ((parseInt(hexHCode, 16) >= 0x81) && (parseInt(hexHCode, 16) <= 0xFE)) {
																
																	hexLCode = code.substr(2, 2);
																
																	dataView[viewIndex++] = parseInt(hexLCode, 16);
																}
															}
															else {
															
																dataView[viewIndex++] = charCode & 0xFF;
															}
														}
														
														// 移除null值
														outputBuffer = new ArrayBuffer(viewIndex);
														outputView = new Uint8Array(outputBuffer);
														for (index = 0; index < viewIndex; index++) outputView[index] = dataView[index];
														
														blob = new Blob([outputBuffer], {type: "text/plain"});
													}
													else if (jQuery('input[name="charType"]:checked').val() === 'utf8') {
													
														blob = new Blob(new Array(content), {type: "text/plain"});
													}
													else {
													
														blob = new Blob(new Array('\uFEFF' + content), {type: "text/plain"});
													}
													
													if (!filename.toLowerCase().endsWith('.txt')) filename += '.txt';
													
													saveAs(blob, filename);
												} 
												catch (error) {
					
													FormUtils.showMessage('存檔過程有誤！訊息：' + error.message);
												}
												finally {
									
													baseModal.remove();
												}
											});
										}
									}
								});

								baseModal.modal('show');
							}
						}
					]
				});
				
				view.addDropdownMenu({
				
					"menuCaption": "其它",
					"items": [
						{
							"caption": "關於",
							"click": function(event) {

								FormUtils.showAbout();
							}
						}
					]
				});

				view.getContainer().css('height', '100%');
				
				view.appendRow('<div id="' + codeMirrorId + '" class="row" style="height:100%;"></div>');
				
				codeMirror = CodeMirror(document.getElementById(codeMirrorId), codeMirrorConfig);
				// codeMirror = CodeMirror.fromTextArea(document.getElementById('codeMirror'), codeMirrorConfig);
				
				codeMirror.setSize('100%', '100%');
				
				if (('localStorage' in window) && (window['localStorage'] !== null)) {
			
					if (localStorage.getItem(localPath)) codeMirror.setValue(localStorage.getItem(localPath));
				}
				
				/**
				 *
				 * @see {@link http://www.wibibi.com/info.php?tid=246|用 JavaScript document.title 取得網站標題 - Wibibi}
				 *
				 */
				codeMirror.on('change', function(cm, change) {
				
					if (document.title.startsWith('*') == false) document.title = '*' + document.title;
				});
				
				codeMirror.focus();
				
				setInterval(function() { 
				
						if (document.title.startsWith('*')) {
						
							if (('localStorage' in window) && (window['localStorage'] !== null)) localStorage.setItem(localPath, codeMirror.getValue());
							
							document.title = document.title.substring(1);
						}
					}, 
					10000
				);
			});
		});
	});
});