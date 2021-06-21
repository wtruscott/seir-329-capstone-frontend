import React, { useState } from 'react';
import axiosInstance from '../axios';
import { useHistory } from 'react-router-dom';

export default function Create() {
	function slugify(string) {
		const a =
			'àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;';
		const b =
			'aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------';
		const p = new RegExp(a.split('').join('|'), 'g');

		return string
			.toString()
			.toLowerCase()
			.replace(/\s+/g, '-')
			.replace(p, (c) => b.charAt(a.indexOf(c)))
			.replace(/&/g, '-and-')
			.replace(/[^\w\-]+/g, '') 
			.replace(/\-\-+/g, '-') 
			.replace(/^-+/, '') 
			.replace(/-+$/, ''); 
	}

	const history = useHistory();
	const initialFormData = Object.freeze({
		name: '',
		slug: '',
		location: '',
		descripertion: '',
	});

	const [formData, updateFormData] = useState(initialFormData);

	const handleChange = (e) => {
		if ([e.target.name] == 'title') {
			updateFormData({
				...formData,
				[e.target.name]: e.target.value.trim(),
				['slug']: slugify(e.target.value.trim()),
			});
		} else {
			updateFormData({
				...formData,
				[e.target.name]: e.target.value.trim(),
			});
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		axiosInstance
			.post(`admin/create/`, {
				name: formData.name,
				slug: formData.slug,
				owner: 1,
				location: formData.location,
				description: formData.description,
			})
			.then((res) => {
				history.push('/admin/');
			});
	};


	return (
		<div>
            <h1>Create New Post</h1>
				<form>
					<input
								
								label="Thing Name"
								name="name"
								autoComplete="name"
								onChange={handleChange}
							/>
						<input
								label="Thing Location"
								name="location"
								autoComplete="location"
								onChange={handleChange}
							/>
						<input
								label="slug"
								name="slug"
								autoComplete="slug"
								value={formData.slug}
								onChange={handleChange}
							/>
						<input
								label="Thing Description"
								name="description"
								autoComplete="description"
								onChange={handleChange}
							/>
					<button
						type="submit"
						onClick={handleSubmit}
					>
						Add Thing
					</button>
				</form>
			</div>
	);
}